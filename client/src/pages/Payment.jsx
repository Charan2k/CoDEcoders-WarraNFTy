import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Web3 from 'web3';
import Moralis from "moralis";
import { useMoralis } from "react-moralis";
import { contractABI, contractAddress } from '../../contract';

const web3 = new Web3(Web3.givenProvider);

function Payment(props) {
  const { isAuthenticated, logout, user } = useMoralis();
  var [counter, setCounter] = useState(0);
  const p = useParams();
  const navi = useNavigate();

  useEffect(() => {
    var temp = localStorage.getItem("counter");
    if(temp === undefined || isNaN(temp)){
      temp = 0;
    }
    temp = parseInt(temp);
    setCounter(temp);
    localStorage.setItem("counter", temp+1);
  },[])
  
  async function payment(){
    var response = await fetch("http://localhost:5069/payment", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    
      //make sure to serialize your JSON body
      body: JSON.stringify({
        id: p.id,
        counter: counter,
        purchase_date: new Date().toUTCString(),
        walletID: localStorage.getItem("walletID")
      })
    })
    var data = await response.json();
    console.log(data);
    mintNFT(data);
    navi(`/success/${data.uid}`);
  }

  const imageurl = "https://www.freepik.es/fotos-vectores-gratis/fungible"
  async function mintNFT(data){
    const file1 = new Moralis.File("nft", imageurl);
      await file1.saveIPFS();
      const file1url = file1.ipfs();
      const file2 = new Moralis.File(data, {
        base64: Buffer.from(JSON.stringify(data)).toString("base64"),
      });
      await file2.saveIPFS();
      const metadataurl = file2.ipfs();

      const contract = new web3.eth.Contract(contractABI, contractAddress);
      const response = await contract.methods
        .safeMint(metadataurl)
        .send({ from: user.get("ethAddress") });


  }

  return (
    <div style={{ diaplay: 'flex', flexDirection: 'column', width: '50vw', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
    <h4 style={{ fontWeight: 'bold', fontSize: '25px', marginTop: '36px', marginBottom: '16px' }}>Confirm Buy</h4>
    <div className="inputs" style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <input type="text" style={{ height: '49px', paddingLeft: '12px', border: '1px solid #e5dfdf', borderRadius: '6px', width: '450px', marginTop: '20px' }} placeholder="Your Wallet ID" />
        {props.isAuthenticated ? 
          <button onClick={()=>payment()} style={{ cursor:'pointer', backgroundColor: '#ff523b', border: 'none', outline: 'none', width: '195px', height: '45px', color: 'white', fontSize: '15px', fontFamily: 'Poppins', marginRight: '15px', borderRadius: '5px', fontWeight: 'bold', marginTop: '20px' }}>Confirm</button>:
          <button onClick={()=>alert("You need to login through metamask in order to confirm")} style={{ cursor:'pointer',backgroundColor: '#716F6F', border: 'none', outline: 'none', width: '195px', height: '45px', color: 'white', fontSize: '15px', fontFamily: 'Poppins', marginRight: '15px', borderRadius: '5px', fontWeight: 'bold', marginTop: '20px' }}>Confirm</button>}
    </div>
    </div>
  )
}

export default Payment
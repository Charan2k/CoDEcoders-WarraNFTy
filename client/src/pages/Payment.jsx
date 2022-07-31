import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Payment() {
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
    var resp = await fetch ('http://localhost:5069/payment', {
      method: 'POST',
      body: JSON.stringify({
        id: p.id,
        counter: counter
      })
    })
    var data = await resp.json();

    navi(`/success/${data.uid}`);
  }

  return (
    <div style={{ diaplay: 'flex', flexDirection: 'column', width: '50vw', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
    <h4 style={{ fontWeight: 'bold', fontSize: '25px', marginTop: '36px', marginBottom: '16px' }}>Confirm Buy</h4>
    <div className="inputs" style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <input type="text" style={{ height: '49px', paddingLeft: '12px', border: '1px solid #e5dfdf', borderRadius: '6px', width: '450px', marginTop: '20px' }} placeholder="Your Wallet ID" />
          <button onClick={()=>payment()} style={{ backgroundColor: '#ff523b', border: 'none', outline: 'none', width: '195px', height: '45px', color: 'white', fontSize: '15px', fontFamily: 'Poppins', marginRight: '15px', borderRadius: '5px', fontWeight: 'bold', marginTop: '20px' }}>Confirm</button>
    </div>
    </div>
  )
}

export default Payment
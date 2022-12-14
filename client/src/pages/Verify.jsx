import React from 'react'

export default function Verify() {
    async function verify(){
        var response = await fetch("http://localhost:5069/verifyProduct", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            
            //make sure to serialize your JSON body
            body: JSON.stringify({
                uid: document.getElementById("uid").value
            })
        })
        var data = await response.json();
        console.log(data);
        var pdate = document.getElementById("pdate");
        var tdate = document.getElementById("tdate");
        pdate.innerHTML = "<b>Purchase Date: </b>" + data.data.purchase_date;
        tdate.innerHTML = "<b>Valid Till: </b>" + data.data.valid_till;

    }
    return (
        <div style={{ width: '70vw', margin: 'auto', display: 'flex', flexDirection: 'row', marginTop: '29px' }}>
            <div className="image" style={{ width: '45%', display: 'flex' }}>
                <img style={{ width: '25vw', marginLeft: 0, borderRadius: '12px' }} src="https://i.ibb.co/b7ZVzYr/product-2.jpg" alt="" />
            </div>
            <div className="rightside" style={{ display: 'flex',flexDirection:'column' }}>
                <div className="details" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                    <p id='pdate' style={{ marginTop: '9px' }}><b>Purchased Date: </b>6/9/1969</p>
                    <p id='tdate' style={{ marginTop: '9px' }}><b>Warranty status: </b> NA</p>
                </div>
                <div className="buttons" style={{marginTop:'24px'}}>
                    <button style={{backgroundColor:'#ff523b',border:'none',outline:'none',width:'195px',height:'45px',color:'white',fontSize:'15px',fontFamily:'Poppins',marginRight:'15px',borderRadius:'5px',fontWeight:'bold'}}>Claim Warranty</button>
                    <button style={{backgroundColor:'#ff523b',border:'none',outline:'none',width:'195px',height:'45px',color:'white',fontSize:'15px',fontFamily:'Poppins',marginRight:'15px',borderRadius:'5px',fontWeight:'bold'}}>Repair / Replace</button>
                </div>
                <div className="verify" style={{marginTop:'54px',display:'flex',flexDirection:'column',textAlign:'left'}}>
                    <h4 style={{ fontWeight: 'bold', fontSize: '25px', marginTop: '6px', marginBottom: '16px' }}>Verify Another Product ?</h4>
                    <input type="text" name="uid" id="uid" style={{height:'40px',paddingLeft:'12px',border:'1px solid #e5dfdf',borderRadius:'6px'}} placeholder="Enter Unique Product ID" />
                    <button onClick={()=>{verify()}} value="Verify" style={{backgroundColor:'#ff523b',border:'none',outline:'none',width:'195px',height:'45px',color:'white',fontSize:'15px',fontFamily:'Poppins',marginRight:'15px',borderRadius:'5px',fontWeight:'bold',marginTop:'20px'}}>Verify</button>
                </div>
            </div>
        </div>
    )
}

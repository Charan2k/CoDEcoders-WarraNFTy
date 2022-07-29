import React from 'react'

export default function Sproduct() {
    return (
        <div style={{ width: '70vw', margin: 'auto', display: 'flex', flexDirection: 'row', marginTop: '29px' }}>
            <div className="image" style={{ width: '45%', display: 'flex' }}>
                <img style={{ width: '500px', marginLeft: 0, borderRadius: '12px' }} src="https://i.ibb.co/b7ZVzYr/product-2.jpg" alt="" />
            </div>
            <div className="rightside" style={{ display: 'flex',flexDirection:'column' }}>
                <div className="details" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                    <h4 style={{ fontWeight: 'bold', fontSize: '25px', marginTop: '6px', marginBottom: '16px' }}>Shoes HRX</h4>
                    <p style={{ marginTop: '9px' }}><span style={{ fontWeight: 'bold' }}>Owned by </span>: Charan Vaddedpally</p>
                    <p style={{ marginTop: '9px' }}><span style={{ fontWeight: 'bold' }}>Purchased Date </span>: 21/10/2001</p>
                    <p style={{ marginTop: '9px' }}><span style={{ fontWeight: 'bold' }}>Warranty status </span>: NA</p>
                    <p style={{ marginTop: '9px' }}><span style={{ fontWeight: 'bold' }}>Issuer </span>: NA</p>
                </div>
                <div className="buttons" style={{marginTop:'24px'}}>
                    <button style={{backgroundColor:'#ff523b',border:'none',outline:'none',width:'195px',height:'45px',color:'white',fontSize:'15px',fontFamily:'Poppins',marginRight:'15px',borderRadius:'5px',fontWeight:'bold'}}>Claim Warranty</button>
                    <button style={{backgroundColor:'#ff523b',border:'none',outline:'none',width:'195px',height:'45px',color:'white',fontSize:'15px',fontFamily:'Poppins',marginRight:'15px',borderRadius:'5px',fontWeight:'bold'}}>Repair / Replace</button>
                </div>
                <div className="verify" style={{marginTop:'54px',display:'flex',flexDirection:'column',textAlign:'left'}}>
                    <h4 style={{ fontWeight: 'bold', fontSize: '25px', marginTop: '6px', marginBottom: '16px' }}>Verify Another Product ?</h4>
                    <input type="text" style={{height:'40px',paddingLeft:'12px',border:'1px solid #e5dfdf',borderRadius:'6px'}} placeholder="Enter Unique ID" />
                    <button style={{backgroundColor:'#ff523b',border:'none',outline:'none',width:'195px',height:'45px',color:'white',fontSize:'15px',fontFamily:'Poppins',marginRight:'15px',borderRadius:'5px',fontWeight:'bold',marginTop:'20px'}}>Verify</button>
                </div>
            </div>
        </div>
    )
}

import React from 'react'

function Payment() {
  return (
    <div style={{ diaplay: 'flex', flexDirection: 'column', width: '50vw', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
    <h4 style={{ fontWeight: 'bold', fontSize: '25px', marginTop: '36px', marginBottom: '16px' }}>Confirm Buy</h4>
    <div className="inputs" style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <input type="text" style={{ height: '49px', paddingLeft: '12px', border: '1px solid #e5dfdf', borderRadius: '6px', width: '450px', marginTop: '20px' }} placeholder="Your Wallet ID" />
        <a href="/success/:id">
            <button style={{ backgroundColor: '#ff523b', border: 'none', outline: 'none', width: '195px', height: '45px', color: 'white', fontSize: '15px', fontFamily: 'Poppins', marginRight: '15px', borderRadius: '5px', fontWeight: 'bold', marginTop: '20px' }}>Confirm</button>
        </a>
    </div>
</div>
  )
}

export default Payment
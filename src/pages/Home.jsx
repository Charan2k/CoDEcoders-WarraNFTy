import React from 'react'
import image from '../assets/homepng.jpg'
export default function Home() {
    return (
        <div style={{display:'flex',flexDirection:'column'}}>
            <div className="left" style={{ width: '100%' }}>
                <img style={{ width: '98vw' }} src={image} alt="" />
            </div>
            <div className="right" style={{ width: '70%',display:'flex',textAlign:'left',justifyContent:'center',alignItems:'center',margin:'auto' }}>
            </div>
        </div>
    )
}

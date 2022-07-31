import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <div   className="container">
            <div   className="navbar">
                <div   className="logo">
                    <Link to="/"><h2>WARRA<span style={{color:'#ff523b'}}>NFT</span>Y</h2></Link>
                </div>
                <nav>
                    <ul id="MenuItems">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/transfer">Transfer</Link></li>
                        <li><Link to="/verify">Verify Products</Link></li>
                        <li><Link to="/signup">Register</Link></li>
                        <li><Link to="/login">LogIn</Link></li>
                    </ul>
                </nav>
                <a href="cart.html"><img src="https://i.ibb.co/PNjjx3y/cart.png" alt="" width="30px" height="30px" /></a>
                <img src="https://i.ibb.co/6XbqwjD/menu.png" alt=""   className="menu-icon" />
            </div>
        </div>
    )
}

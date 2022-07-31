export default function Productcard(props) {
    return (
        <a href={`/product/${props.id}`} style={{textDecoration:'none'}}   className="col-4">
            <img src={props.img} alt="" />
            <h4>{props.name}</h4>
            <p>₹{props.price}</p>
        </a>
    )
}

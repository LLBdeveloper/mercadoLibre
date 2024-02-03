
const Item = ({ title, thumbnail, price}) => {
    return (
        <div >
            <h3>{title}</h3>
            <img src={thumbnail} alt={title} />
            <p>Price: ${price}</p>
        </div>
    )
}




export default Item
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


const Item = ({ title, thumbnail, price}) => {


    // const handleClick = () =>{
        
    // }


    return (
        <Card style={{ width: '18rem', margin: '1rem' }} bg="dark" data-bs-theme="dark" border="warning" >
            <Card.Img variant="top" src={thumbnail} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>$ {price}</Card.Text>

                <Link to="/itemDetail" className="btn btn-warning">Buy</Link>


            </Card.Body>
        </Card>
    );
}




export default Item



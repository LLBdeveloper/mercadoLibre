import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({ title, thumbnail, price}) => {
    return (
        <Card style={{ width: '18rem', margin: '1rem' }} bg="dark" data-bs-theme="dark" border="warning" >
            <Card.Img variant="top" src={thumbnail} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>$ {price}</Card.Text>
                <Button variant="primary" >Buy</Button>
            </Card.Body>
        </Card>
    );
}




export default Item



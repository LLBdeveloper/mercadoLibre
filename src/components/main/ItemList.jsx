import PropTypes from 'prop-types';
import Item from './Item';



function ItemList({products}) {
    return (
        <div>
            {products.map(product => <Item key={product.id} {...product} />)}
        </div>
    )
}

ItemList.propTypes = {
    products: PropTypes.array.isRequired,
};

export default ItemList
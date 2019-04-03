import { connect } from 'react-redux';

import { addProduct } from '../../actions/product.actions';

import ProductDetails from './product-details.route';

const mapStateToProps = state => {
    return ({
        products: state.products,
    });
};

const mapDispatchToProps = {
    addProduct
};

const ProductDetailsConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductDetails);

export default ProductDetailsConnected;

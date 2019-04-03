import { connect } from 'react-redux';

import { updateProduct, removeProduct, clearProducts } from '../../actions/product.actions';

import CheckoutRoute from './checkout.route';

const mapStateToProps = state => {
    return ({
        storedProducts: state.products,
    });
};

const mapDispatchToProps = {
    updateProduct,
    removeProduct,
};

const CheckoutRouteConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckoutRoute);

export default CheckoutRouteConnected;

import { connect } from 'react-redux';

import { clearProducts } from '../../actions/product.actions';

import PurchaseRoute from './purchase.route';

const mapStateToProps = state => {
    return ({
        products: state.products,
    });
};

const mapDispatchToProps = {
    clearProducts,
};

const PurchaseRouteConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(PurchaseRoute);

export default PurchaseRouteConnected;

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addProducts } from '../../actions/product.actions';

import Header from './header';

const mapStateToProps = ({ products }) => {
    const totalProducts = products.reduce((total, product) => total + product.quantity, 0);

    return ({
        totalProducts,
        products,
    });
};

const mapDispatchToProps = {
    addProducts,
};

const HeaderConnected = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Header));

export default HeaderConnected;

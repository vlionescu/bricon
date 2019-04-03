import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import productsHelper from '../../helpers/products.helper';

import styles from './checkout.route.module.css';

class CheckoutRoute extends Component {
    state = {
        products: [],
        totalPrice: 0,
        totalProducts: 0,
        shippingPrice: 0,
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { storedProducts } = this.props;
        this._getProducts(storedProducts.map(({id}) => id));
    }

    _getProducts = productIds => {
        productsHelper.searchProducts(productIds)
            .then(this._storeProductsQuantity);
    };

    componentWillReceiveProps(nextProps) {
        this._getProducts(nextProps.storedProducts.map(({id}) => id));
    }

    _updateProductQuantity = (id, quantity) => {
        const { updateProduct } = this.props;
        if(quantity < 1) quantity = 1;

        updateProduct(id, quantity);
    };

    _storeProductsQuantity = products => {
        const { storedProducts } = this.props;
        if(products.length) {
            let totalPrice = 0;
            let totalProducts = 0;

            [...storedProducts].forEach(storedProduct => {
                const {id} = storedProduct;
                const product = [...products].find(product => product.id === id);

                product.requestedQuantity = storedProduct.quantity;
                totalProducts += storedProduct.quantity;
                totalPrice += product.requestedQuantity * product.price;
            });

            this.setState({
                products: [...products],
                totalPrice,
                totalProducts,
            });
        }
    };

    _removeProduct = id => {
        const {removeProduct} = this.props;
        removeProduct(id);
    };


    render() {
        const { products, totalPrice, totalProducts, shippingPrice } = this.state;

        return (
            <main className={styles.checkout__container}>
                <div className={styles.checkout__products}>
                    <h1 className={styles.checkout__heading}>Produsele tale ({totalProducts})</h1>
                    {totalProducts ?
                        (<ul>
                            {
                                products.length > 0 && products.map(product => {
                                    const { requestedQuantity, price } = product;
                                    return (
                                        <li key={product.id} className={styles.product__container}>
                                            <div style={{backgroundImage: `url("${product.images[0].url}")`}}
                                                 className={styles.product__image}></div>
                                            <div className={styles.product__details}>
                                                <h1>{product.name}</h1>
                                                <div className={styles.product__quantity}>
                                                    <i className="fas fa-minus-square"
                                                       onClick={() => this._updateProductQuantity(product.id, requestedQuantity - 1)}></i>
                                                    {requestedQuantity}
                                                    <i className="fas fa-plus-square"
                                                       onClick={() => this._updateProductQuantity(product.id, requestedQuantity + 1)}></i>
                                                </div>
                                                <div className={styles.product__price}>pret: {price}</div>
                                                <div>
                                                    total: {requestedQuantity * price}
                                                </div>

                                            </div>
                                            <button className={styles.delete__button}
                                                    onClick={() => this._removeProduct(product.id)}>delete
                                            </button>
                                        </li>
                                    )
                                })
                            }
                        </ul>)
                        :
                        <div>no products</div>
                    }
                </div>
                <div className={styles.checkout__price}>
                    <h1 className={styles.price__title}>rezumat</h1>
                    <div className={styles.price__details}>
                        <div>
                            <span className={styles.price__label}>subtotal</span>
                            <span>{totalPrice}</span>
                        </div>
                        <div>
                            <span className={styles.price__label}>taxa livrare</span>
                            <span>{shippingPrice}</span>
                        </div>
                        <div>
                            <span className={styles.price__label}>total</span>
                            <span>{totalPrice + shippingPrice}</span>
                        </div>
                    </div>
                    <div className={styles.checkout__buy}>
                        <Route render={({history}) => (
                            <button
                                className="main__button"
                                onClick={() => {
                                    history.push(`/comanda/finalizare`);
                                }}
                            >
                                cumpara
                            </button>
                        )}/>
                    </div>
                </div>
            </main>

        )
    }
}

export default CheckoutRoute;

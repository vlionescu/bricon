import React, { Component } from 'react';
import { NavLink , Route } from 'react-router-dom'

import styles from './header.module.css';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this._getProductsFromLocalstorage();
    }

    _getProductsFromLocalstorage = () => {
        const localstorageProducts = JSON.parse(localStorage.getItem('products'));
        this._storeProductsFromLocalstorage(localstorageProducts);
    };

    _storeProductsFromLocalstorage = (localstorageProducts) => {
        const { products, addProducts } = this.props;

        if(!products.length && localstorageProducts) {
            addProducts(localstorageProducts);
        }
    };

    render() {
        const {totalProducts} = this.props;

        return (
            <header className={styles.header__container}>
                <div>
                    <img src="/assets/bricon-logo.jpg" alt="" className={styles.header__logo}/>
                </div>
                <ul className={styles.header__navigation}>
                    <li>
                        <NavLink
                            to="/"
                            exact
                            activeClassName={styles['header__navigation-link-selected']}
                            className={styles['header__navigation-link']}
                        >
                            acasa
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/produse"
                            activeClassName={styles['header__navigation-link-selected']}
                            className={styles['header__navigation-link']}
                        >
                            produse
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/articole"
                            activeClassName={styles['header__navigation-link-selected']}
                            className={styles['header__navigation-link']}
                        >
                            articole
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/instructiuni"
                            activeClassName={styles['header__navigation-link-selected']}
                            className={styles['header__navigation-link']}
                        >
                            instructiuni
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/downloads"
                            activeClassName={styles['header__navigation-link-selected']}
                            className={styles['header__navigation-link']}
                        >
                            software
                        </NavLink>
                    </li>
                </ul>
                <Route render={({history}) => (
                    <div className={styles.icon__container}>
                        <img
                            src="/assets/shopping-cart.png"
                            className={styles.shopping__icon}
                            style={{ cursor: totalProducts > 0 ? 'pointer' : 'normal' }}
                            onClick={() => {
                                if (totalProducts > 0) history.push(`/comanda`);
                            }}
                        />
                        {totalProducts !== 0 && <i className={styles["shopping__icon--number"]}>{totalProducts}</i>}
                    </div>
                )}/>
            </header>

        );
    }
}

export default Header;

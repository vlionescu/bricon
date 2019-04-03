import React, { Component } from 'react';

import Product from './components/product.component';

import categoriesHelper from '../../helpers/categories.helper';
import productsHelper from '../../helpers/products.helper';

import styles from './products.route.module.css';

class ProductsRoute extends Component {
    state = {
        products: [],
        categories: [],
        activeCategories: {},
    };

    categoriesById = {};

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        categoriesHelper.getCategories()
            .then(categories => {
                categories.forEach(category => {
                    this.categoriesById[category.id] = category;
                });
                const activeCategories = {};
                categories.forEach(({name}) => activeCategories[name] = true);
                this.setState({categories, activeCategories});
            });

        productsHelper.getProducts()
            .then(products => {
                this.setState({products});
            });
    }


    render() {
        const {categories, products} = this.state;
        return (
            <main className={styles.products__route}>
                <div>
                    {
                        categories.map(({name, id}) => <button key={id}>{name}</button>)
                    }
                </div>
                <section className={styles.products__container}>
                    {
                        products.map(product => (
                            <Product product={product}  key={product.id}/>
                        ))
                    }
                </section>
            </main>
        )
    }
}

export default ProductsRoute;

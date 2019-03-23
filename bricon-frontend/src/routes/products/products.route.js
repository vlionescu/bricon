import React, { Component } from 'react';

import categoriesHelper from '../../helpers/categories.helper';

import styles from './products.route.module.css';

class ProductsRoute extends Component {
    state = {
        categories: [],
        activeCategories: {},
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        categoriesHelper.getCategories()
            .then(categories => {
                const activeCategories = {};
                categories.forEach(({ name }) => activeCategories[name] = true);
                this.setState({categories, activeCategories});
            })
    }


    render() {
        const {categories} = this.state;
        return (
            <main>
                <h2>Products</h2>
                <div>
                    {
                        categories.map(({ name }) =>  <button onClick={() => {}}>{name}</button>)
                    }
                </div>
            </main>
        )
    }
}

export default ProductsRoute;

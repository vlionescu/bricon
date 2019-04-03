import React, { Component } from 'react';

import productsHelper from '../../helpers/products.helper';
import categoriesHelper from '../../helpers/categories.helper';

import styles from './product-details.route.module.css';

class ProductDetailsRoute extends Component {
    state = {
        product: {},
        crtImage: null,
        prevImage: null,
        categoriesById: {},
        selected: 1,
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        productsHelper.getProduct(id)
            .then(product => {
                this.setState({
                    product,
                    crtImage: product.images ? product.images[0] : null,
                });
            });

        categoriesHelper.getCategories()
            .then(categories => {
                const categoriesById = {};
                categories.forEach(category => {
                    categoriesById[category.id] = category.name;
                });

                this.setState({ categoriesById });
            });
    }

    _updateSelected = by => {
        this.setState(({ selected }) => {
            const updatedSelected = selected + by > 0 ? selected + by : 1;

            return ({
                selected: updatedSelected,
            })
        });
    };

    _addProductToCart = () => {
        const { product: { id }, selected } = this.state;
        const { addProduct } = this.props;

        addProduct(id, selected);
    };

    render() {
        const { product, crtImage, prevImage, categoriesById, selected } = this.state;
        const { images, name, category, description, price } = product;
        return (
            <main className={styles.product__container}>
                <section className={styles.product__images}>
                    <div>
                        {crtImage && <div className={styles['product__main--image--container']}
                                           style={{backgroundImage: `url("${crtImage.url}")`}}></div>}
                    </div>
                    <div>
                        {
                            images && images.map(image => <img
                                className={styles['product__images--icon']}
                                src={image.url} alt=""
                                onClick={() => this.setState({ crtImage: image, prevImage: image })}
                                onMouseEnter={() => this.setState({ crtImage: image, prevImage: crtImage })}
                                onMouseLeave={() => this.setState({ crtImage: prevImage })}
                            />)
                        }
                    </div>
                </section>
                <section className={styles.product__details}>
                    <div>{categoriesById[category]}</div>
                    <h1>{name}</h1>
                    <div>{description}</div>
                    <div>{price} LEI</div>
                    <div className={styles.selected}>
                        <i className="fas fa-minus-square" onClick={() => this._updateSelected(-1)}></i>
                        {selected}
                        <i className="fas fa-plus-square" onClick={() => this._updateSelected(1)}></i>
                    </div>
                    <button className="main__button" onClick={this._addProductToCart}>cumpara</button>
                </section>
            </main>
        );
    }
};

export default ProductDetailsRoute;

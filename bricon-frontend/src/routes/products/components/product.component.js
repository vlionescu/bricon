import React from 'react';
import { Route } from 'react-router-dom'


import styles from './product.component.module.css';

const Product = ({ product }) => {
    const { id, images, name, category, price } = product;
    return (
        <Route render={({history}) => (
            <article className={styles.product__container} onClick={() => {
                history.push(`/produse/${id}`)
            }}>
                <div className={styles.product__image}>
                    {images[0] && <div style={{backgroundImage: `url("${images[0].url}"`}}></div>}
                </div>
                <div className={styles.product__details}>
                    <h1 className={styles.product__name}>{name}</h1>
                    <div className={styles.product__category}>{category}</div>
                    <div className={styles.product__price}>{price} LEI</div>
                </div>
            </article>
        )}/>
    );
};

export default Product;

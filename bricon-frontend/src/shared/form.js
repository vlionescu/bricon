import React, { Component } from 'react';

import Input from './input';
import InputFile from './input-file';

import categoriesHelper from '../helpers/categories.helper';
import productsHelper   from '../helpers/products.helper';

export default class ProductsForm extends Component {
    state = {
        categories: [],
        data: {
            name: null,
            description: null,
            category: null,
            price: null,
            quantity: null,
        },
        images: [],
        validators: {
            name: false,
            description: false,
            category: false,
            price: false,
            quantity: false,
        },
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        categoriesHelper.getCategories()
            .then(categories => {
                const activeCategories = {};
                categories.forEach(({name}) => activeCategories[name] = true);
                this.setState({categories, activeCategories});
            })
    }

    _onChange = (name, value) => {
        const { validators, data } = this.state;
        this.setState({
            data: {...data, ...{[name]: value}},
            validators: {...validators, ...{[name]: true} }
        })
    };

    _onFileChange = (value) => {
        this.setState({ images: value });
    };

    _onInvalid = (name) => {
        const { validators } = this.state;
        this.setState({
            validators: {...validators, ...{[name]: false} }
        })
    };

    _onSubmit = (event) => {
        event.preventDefault();

        const { data, images } = this.state;
        const formData = new FormData();

        Object.entries(data).forEach(([name, value]) => {
            formData.append(name, value);
        });

        Object.values(images).forEach(img => {
           formData.append('images', img, img.name);
        });

        productsHelper.addProduct(formData).then(res => console.log(res))
    };

    render() {
        const { categories } = this.state;

        return (
            <form onSubmit={this._onSubmit}>
                <Input
                    onChange={this._onChange}
                    id="product-name"
                    key="product-name"
                    placehoder="nume produs"
                    name="name"
                    labelName="nume produs"
                    isRequired
                />
                <Input
                    onChange={this._onChange}
                    id="product-description"
                    key="product-description"
                    placehoder="descriere produs"
                    name="description"
                    labelName="descriere"
                    isRequired
                />
                <select onChange={({target: { value, name } }) => this._onChange(name, value)} name="category">
                    {
                        categories.map(({name, id}) => (
                            <option key={id} value={id}>{name}</option>
                        ))
                    }
                </select>
                <Input
                    type="number"
                    onChange={this._onChange}
                    id="product-price"
                    key="product-price"
                    placehoder="pret produs"
                    name="price"
                    labelName="pret"
                    isRequired
                />
                <Input
                    type="number"
                    onChange={this._onChange}
                    id="product-quantity"
                    key="product-quantity"
                    placehoder="cantitate produs"
                    name="quantity"
                    labelName="cantitate"
                    isRequired
                />
                <InputFile
                    id="product-images"
                    labelName="imagini"
                    name="images"
                    onChange={this._onFileChange}
                />
                <button type="submit">adauga produs</button>
            </form>
        );
    };
};

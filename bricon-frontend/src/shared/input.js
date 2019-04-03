import React, { Component } from 'react';

import cx from 'classnames';

import validators from '../services/input-validation.service';

import styles from './input.module.css';

export default class Input extends Component {
    state = {
        isValid: true,
        errorMessage: null,
    };

    constructor(props) {
        super(props);
    }

    _getValidator = type => {
        let validator;
        switch (type) {
            case 'email' :
                validator = validators.isEmail;
                break;
            case 'url':
                validator = validators.isURL;
                break;
            case 'number':
                validator = validators.isNumber;
                break;
            default:
                validator = validators.isText;
                break;
        }

        return validator;
    };

    _handleChange = ({target: {value}}) => {
        const { onChange, type, isRequired, name } = this.props;
        value = value.trim();

        let isValid;
        let errorMessage;
        if(isRequired && !value) {
            isValid = false;
            errorMessage = 'Campul trebuie completat';
        } else {
            const validator = this._getValidator(type);
            isValid = validator(value);
            if(!isValid) {
                errorMessage = 'Formatul nu este valid';
            } else {
                errorMessage = null;
            }
        }
        this.setState({ isValid, errorMessage });

        if (isValid) {
            onChange(name, value);
        } else {
            // onChange(null);/
        }
    };

    _getInputClass = () => {
        const { isValid } = this.state;
        const { type } = this.props;

        return cx({
            [styles.input]: type !== 'textarea',
            [styles.textarea]: type === 'textarea',
            [styles.input__valid]: isValid,
            [styles.input__invalid]: !isValid,
        });
    };

    render() {
        const {
            type = 'text',
            id,
            labelName,
            placeholder,
        } = this.props;

        const { isValid, errorMessage } = this.state;

        return (
            <div>
                <label
                    htmlFor={id}
                    className={styles.label}
                >{labelName}</label>
                {type === 'textarea' ? (
                    <React.Fragment>
                        <textarea
                            id={id}
                            placeholder={placeholder}
                            className={this._getInputClass()}
                            onChange={this._handleChange}
                        >
                        </textarea>
                        { isValid ? null :  <i className={cx('fa', 'fa-exclamation-circle', styles['input__icon--error'])} title={errorMessage}/> }
                    </React.Fragment>
                    )
                    : (
                        <React.Fragment>
                            <input
                                type={type}
                                id={id}
                                placeholder={placeholder}
                                className={this._getInputClass()}
                                onBlur={this._handleChange}
                            />
                            { isValid ? null :  <i className={cx('fa', 'fa-exclamation-circle', styles['input__icon--error'])} title={errorMessage}/> }
                        </React.Fragment>
                    )
                }
            </div>
        );
    };
};

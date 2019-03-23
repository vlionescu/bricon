import React, { Component } from 'react';
import cx from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './article.component.module.css';

class Article extends Component {
    state = {
        expanded: false,
    };

    constructor(props) {
        super(props);
    }

    _toggleExpand = () => {
        this.setState({expanded: !this.state.expanded});
    };

    _getContainerClass = () => {
        const { expanded } = this.state;

        return  cx(
            styles.article__container,
            {
                [styles.expanded]: expanded,
            }
        );
    };

    render() {
        const { title, content } = this.props;
        const { expanded } = this.state;

        return (
            <article className={this._getContainerClass()}>
                <h1 className={styles.article__title}>{title}</h1>
                <p >{content}</p>
                <FontAwesomeIcon
                    icon={expanded ? 'angle-up' : 'angle-down'}
                    className={styles.article__icon}
                 onClick={this._toggleExpand}
                />
            </article>
        );
    }
}

export default Article;

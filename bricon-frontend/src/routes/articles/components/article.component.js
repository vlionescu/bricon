import React, { Component } from 'react';
import cx from 'classnames';

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

    _getIconClass = () => {
        const { expanded } = this.state;

        return cx(
            'fa',
            styles.article__icon,
            {
                'fa-angle-up': expanded,
                'fa-angle-down': !expanded
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
                <i className={this._getIconClass()} onClick={this._toggleExpand}/>
            </article>
        );
    }
}

export default Article;

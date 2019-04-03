import React, { Component } from 'react';

import articlesHelper from '../../helpers/articles.helper';

import Article from './components/article.component';

import styles from './articles.route.module.css';

class ArticlesRoute extends Component {
    state = {
        articles: [],
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        articlesHelper.getArticles()
            .then(articles => {
                this.setState({ articles });
            })
    }

    render() {
        const { articles } = this.state;

        return (
            <main className={styles.articles__container}>
            {
                articles.map(({ title, text, id }) => (
                    <Article title={title} content={text} key={id} />
                ))
            }
            </main>
        )
    }
}

export default ArticlesRoute;

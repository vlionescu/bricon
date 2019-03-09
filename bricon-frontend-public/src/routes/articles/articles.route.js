import React, { Component } from 'react';

import Article from './components/article.component';
import styles from './articles.route.module.css';

const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid commodi consectetur consequatur enim error explicabo facere illo impedit ipsum nemo odio officia provident quidem sunt temporibus, tenetur, unde voluptatum. lorem`;
class ArticlesRoute extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <main className={styles.articles__container}>
                <Article title={'this is a title wow'} content={text} />
                <Article title={'this is a title wow'} content={text} />
            </main>
        )
    }
}

export default ArticlesRoute;

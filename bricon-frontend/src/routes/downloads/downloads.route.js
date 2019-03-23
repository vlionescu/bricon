import React, { Component } from 'react';

import styles from './downloads.route.module.css';
import downloadsHelper from '../../helpers/downloads.helper';

class DownloadsRoute extends Component {
    state = {
        downloads: null,
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        downloadsHelper.getDownloads()
            .then(downloads => {
                this.setState({ downloads });
            })
    }

    render() {
        const { downloads } = this.state;

        return (
            <main>
                <h2>
                    Software downloads
                </h2>
                {downloads && <div className={styles.downloads__container}>
                    {
                        downloads.map(({title, description, url, id}) => (
                            <article className={styles.download} key={id}>
                                <h2 className={styles.download__title}>{title}</h2>
                                <div className={styles.download__content}>
                                    <span className={styles.download__description}>{description}</span>
                                    <span className={styles['download__link--container']}>
                                        <a className={styles.downloads__button} href={url}>descarca</a>
                                    </span>
                                </div>
                            </article>
                        ))
                    }
                </div>
                }
            </main>
        )
    }
}

export default DownloadsRoute;

import React, { Component } from 'react';

import Download from './components/download.component';

import downloadsHelper from '../../helpers/downloads.helper';

import styles from './downloads.route.module.css';

class DownloadsRoute extends Component {
    state = {
        downloads: null,
    };

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
                {downloads && <div className={styles.downloads__container}>
                    {
                        downloads.map(({id, title, description, url}) => (
                            <Download id={id} title={title} description={description} url={url} key={id} />
                        ))
                    }
                </div>
                }
            </main>
        )
    }
}

export default DownloadsRoute;

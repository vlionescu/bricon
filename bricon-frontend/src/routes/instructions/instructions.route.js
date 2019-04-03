import React, { Component } from 'react';
import VideoCard from './components/video-card.component';

import styles from './instructions.route.module.css';

const mocks = [
    {
        title: 'My first instruction',
        description: 'useful instructional video for any newcomer to the platform',
        src: 'https://www.youtube.com/embed/tgbNymZ7vqY',
        keywords: '',
        id: 123,
    },
    {
        title: 'My second instruction',
        description: 'useful instructional video for any frontcomer to the platform',
        src: 'https://www.youtube.com/embed/OdlgvgrssEU',
        keywords: '',
        id: 456,
    }
];

class InstructionsRoute extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className={styles['instructional-video__section']}>
                {
                    mocks.map(({title, description, src, id}) => (
                        <VideoCard videoSrc={src} title={title} description={description} key={id} />
                    ))
                }
            </main>
        )
    }
}

export default InstructionsRoute;

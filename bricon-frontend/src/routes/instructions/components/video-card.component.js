import React from 'react';

import styles from './video-card.component.module.css';

const VideoCard = ({videoSrc, title, description}) => {
    return (
        <article className={styles['video-card']}>
            <h1>{title}</h1>
            <p>{description}</p>
            <iframe src={videoSrc} className={styles['video-card__iframe']}></iframe>
        </article>
    )
};

export default VideoCard;

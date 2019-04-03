import React from 'react';

import styles from './download.component.module.css';

const Download = ({id, title, description, url}) => {
    return (
        <article className={styles.download} key={id}>
            <div className={styles.download__content}>
                <h2 className={styles.download__title}>{title}</h2>
                <span className={styles.download__description}>{description}</span>
            </div>
            <span className={styles['download__link--container']}>
                <a className="main__button" href={url}>descarca</a>
            </span>
        </article>
    )
};

export default Download;

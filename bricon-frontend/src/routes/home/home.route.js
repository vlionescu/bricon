import React from 'react';

import cx from 'classnames';

import styles from './home.route.module.css';

const HomeRoute = () => (
    <main className={styles['home--route__container']}>
        <section className={styles.section__first}>
            <h1>
                bricon
            </h1>
        </section>
        <section className={styles.section__second}>
            <div className={styles.quote__container}>
                <h2>ceva citat motivational</h2>
                <p><i>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci consequatur dolorem eos ex facilis maxime nesciunt quia reprehenderit voluptatem. Adipisci aliquid dolorem doloribus est obcaecati quasi recusandae similique totam!"</i> <span>Nume Prenume</span></p>
            </div>
        </section>
        <section className={styles.section__third}>
            <div className={styles['images__container--row']}>
                <div className={styles['images__container--subrow']}>
                    <div className={cx(styles.image, styles.image__first)}></div>
                    <div className={cx(styles.image, styles.image__second)}></div>
                </div>
                <div className={styles['images__container--subrow']}>
                    <div className={cx(styles.image, styles.image__third)}></div>
                    <div className={cx(styles.image, styles.image__fourth)}></div>
                </div>
            </div>
            <div className={styles['images__container--row']}>
                <div className={styles['images__container--subrow']}>
                    <div className={cx(styles.image, styles.image__fifth)}></div>
                    <div className={cx(styles.image, styles.image__sixth)}></div>
                </div>
                <div className={styles['images__container--subrow']}>
                    <div className={cx(styles.image, styles.image__seventh)}></div>
                    <div className={cx(styles.image, styles.image__eight)}></div>
                </div>
            </div>
        </section>
        <section className={styles.section__fourth}>
            <div className={styles.info__container}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum cumque cupiditate deleniti enim esse exercitationem expedita iusto labore laboriosam libero minus, nam necessitatibus quaerat quam quisquam reiciendis sint veniam voluptate.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci consequatur dolorem eos ex facilis maxime nesciunt quia reprehenderit voluptatem. Adipisci aliquid dolorem doloribus est obcaecati quasi recusandae similique totam</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum incidunt labore quidem reprehenderit voluptate. Ab accusamus asperiores, cumque deserunt est, et laboriosam nam numquam obcaecati, porro quibusdam sit tempora ullam?</p>
            </div>
        </section>
    </main>
);

export default HomeRoute;

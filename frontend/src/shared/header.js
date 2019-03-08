import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.header__container}>
            <div>
                <img src="/assets/bricon-logo.jpg" alt="" className={styles.header__logo}/>
            </div>
            <ul className={styles.header__navigation}>
                <li>
                    <NavLink
                        to="/"
                        exact
                        activeClassName={styles['header__navigation-link-selected']}
                        className={styles['header__navigation-link']}
                    >
                        home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/products"
                        activeClassName={styles['header__navigation-link-selected']}
                        className={styles['header__navigation-link']}
                    >
                        products
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/articles"
                        activeClassName={styles['header__navigation-link-selected']}
                        className={styles['header__navigation-link']}
                    >
                        articles
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/instructions"
                        activeClassName={styles['header__navigation-link-selected']}
                        className={styles['header__navigation-link']}
                    >
                        instructional videos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/software"
                        activeClassName={styles['header__navigation-link-selected']}
                        className={styles['header__navigation-link']}
                    >
                        software download
                    </NavLink>
                </li>
            </ul>
        </header>
    );
};

export default Header;

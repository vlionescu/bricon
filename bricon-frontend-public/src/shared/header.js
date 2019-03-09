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
                        acasa
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/produse"
                        activeClassName={styles['header__navigation-link-selected']}
                        className={styles['header__navigation-link']}
                    >
                        produse
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/articole"
                        activeClassName={styles['header__navigation-link-selected']}
                        className={styles['header__navigation-link']}
                    >
                        articole
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/instructiuni"
                        activeClassName={styles['header__navigation-link-selected']}
                        className={styles['header__navigation-link']}
                    >
                        instructiuni
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/software"
                        activeClassName={styles['header__navigation-link-selected']}
                        className={styles['header__navigation-link']}
                    >
                        software
                    </NavLink>
                </li>
            </ul>
        </header>
    );
};

export default Header;

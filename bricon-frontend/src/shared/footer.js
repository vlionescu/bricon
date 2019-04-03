import React from 'react';

import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer__container}>
            <div className={styles.footer__copyright}>
                Toate drepturile sunt rezervate de Bricon Romania SRL <i className="far fa-copyright"/>
            </div>
            <div className={styles.footer__icons}>
                <a href="https://www.facebook.com" target="_blank"><i className="fab fa-facebook-f"/></a>
                <a href="mailto:someone@example.com?Subject=Hello%20again"><i className="far fa-envelope" /></a>
            </div>
        </footer>
    );
};

export default Footer;

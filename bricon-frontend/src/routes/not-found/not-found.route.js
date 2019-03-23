import React from 'react';
import Input from '../../shared/input';
import styles from './not-found.route.module.css';

const NotFoundRoute = () => (
    <div>
        <h2>404 no es bueno</h2>
        <Input type="url" id="text" labelName="Text" placeholder="test" isRequired={true}/>
    </div>
);

export default NotFoundRoute;

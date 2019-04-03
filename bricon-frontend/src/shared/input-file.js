import React from 'react';

import styles from './input.module.css';

const InputFile = ({
    id,
    labelName,
    name,
    onChange,
}) => {
    const _handleChange = ({ target: { files } }) => {
        onChange(files);
    };

    return (
        <React.Fragment>
            <label htmlFor={id}>{labelName}</label>
            <input
                type="file"
                multiple
                id={id}
                name={name}
                className={styles.input__file}
                onBlur={_handleChange}
            />
        </React.Fragment>
    );
};

export default InputFile;

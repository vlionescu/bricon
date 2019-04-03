import React from 'react';

import Form from '../../shared/form';

const Purchase = ({ products }) => (
    <div>{
        products.map(prod => (<div>{prod.id} {prod.quantity}</div>))
    }
        <Form />
    </div>
);

export default Purchase;

import React from 'react';

import Form from '../../shared/form';

const Purchase = ({ products, clearProducts }) => (
    <div>{
        products.map(prod => (<div>{prod.id} {prod.quantity}</div>))
    }
        <Form />
        <button onClick={clearProducts}>clear</button>
    </div>
);

export default Purchase;

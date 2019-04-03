const localstorageSetter = store => next => action => {
    let result = next(action);
    const { products } = store.getState();

    localStorage.setItem('products', JSON.stringify(products));
    return result
};

export default localstorageSetter;

//Use local storage to manage cart data

const getStoredCart = () => {
    let shoppingCart = {};
    const storedShoppingCart = localStorage.getItem("shopping-cart");
    if (storedShoppingCart) {
        shoppingCart = JSON.parse(storedShoppingCart);
    }
    return shoppingCart;
};

const addToLocalDb = (id) => {
    let shoppingCart = getStoredCart();

    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const removeFromLocalDb = (id) => {
    const storedShoppingCart = localStorage.getItem("shopping-cart");
    if (storedShoppingCart) {
        const shoppingCart = JSON.parse(storedShoppingCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
        }
    }
};
export { addToLocalDb, removeFromLocalDb, getStoredCart };

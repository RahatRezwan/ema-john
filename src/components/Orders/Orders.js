import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromLocalDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import OrderItem from "../OrderItem/OrderItem";

const Orders = () => {
    const { initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);

    const handleRemoveItem = (id) => {
        removeFromLocalDb(id);
        const remaining = cart.filter((product) => product.id !== id);
        setCart(remaining);
    };

    const handleDeleteCart = () => {
        setCart([]);
        deleteShoppingCart();
    };

    return (
        <div className="shop-container">
            <div className="orders-container">
                {cart.map((product) => (
                    <OrderItem
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    />
                ))}
                {cart.length === 0 && (
                    <h2>
                        No items in order. Please go to <Link to={"/shop"}>Shop</Link>
                    </h2>
                )}
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleDeleteCart={handleDeleteCart} />
            </div>
        </div>
    );
};

export default Orders;

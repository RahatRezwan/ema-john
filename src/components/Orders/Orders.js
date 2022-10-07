import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { removeFromLocalDb } from "../../utilities/fakedb";
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
            </div>
            <div className="cart-container">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Orders;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
    console.log(cart);

    let totalPrice = 0;
    let totalShipping = 0;

    for (let product of cart) {
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const totalTax = (totalPrice * 0.1).toFixed(2);
    const grandTotal = totalPrice + totalShipping + parseFloat(totalTax);

    return (
        <div className="cart">
            <div className="cart-title">
                <h4>Order Summary</h4>
            </div>

            <div className="cart-body">
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${totalTax}</p>
                <h3>Grand Total: ${grandTotal}</h3>
            </div>
            <div className="btn-grp">
                <button className="btn-clear-cart order-btn">
                    <p>Clear Cart</p>
                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </button>
                <button className="btn-review-order order-btn">
                    <p>Review Order</p>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Cart;
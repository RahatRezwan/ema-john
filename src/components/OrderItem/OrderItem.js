import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./OrderItem.css";
const OrderItem = ({ product, handleRemoveItem }) => {
    const { img, name, price, quantity, id, shipping } = product;
    return (
        <div className="order-item">
            <img src={img} alt="" />
            <div className="order-details-container">
                <div className="order-details">
                    <h3>{name}</h3>
                    <p>
                        Price: <span>{price}</span>
                    </p>
                    <p>
                        Delivery Charge: <span>{shipping}</span>
                    </p>
                    <p>
                        Quantity: <span>{quantity}</span>
                    </p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveItem(id)}>
                        <FontAwesomeIcon className="trashCan" icon={faTrashCan} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderItem;

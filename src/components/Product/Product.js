import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
    const { handleAddToCart, product } = props;
    const { name, img, price, ratings, seller } = product;

    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-description">
                <div>
                    <p className="product-name">{name}</p>
                    <p>Price: ${price}</p>
                </div>
                <div className="manufacturer-and-rating">
                    <p>
                        <small>Manufacturer: {seller}</small>
                    </p>
                    <p>
                        <small>Ratings: {ratings} stars</small>
                    </p>
                </div>
            </div>
            <button onClick={() => handleAddToCart(product)} className="cart-btn">
                <p> Add To Cart </p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;

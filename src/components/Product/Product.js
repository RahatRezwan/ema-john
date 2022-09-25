import React from "react";
import "./Product.css";

const Product = (props) => {
    console.log(props);
    const { name, img, price, ratings, seller } = props.product;
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
            <button className="cart-btn">
                <p> Add To Cart </p>
            </button>
        </div>
    );
};

export default Product;

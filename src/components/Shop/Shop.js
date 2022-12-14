import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { addToLocalDb, deleteShoppingCart, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
   const { products } = useLoaderData();
   // State for shopping cart
   const [cart, setCart] = useState([]);

   const handleDeleteCart = () => {
      setCart([]);
      deleteShoppingCart();
   };
   useEffect(() => {
      const storedCart = getStoredCart();
      const savedCart = [];
      for (const id in storedCart) {
         const addedProduct = products.find((product) => product.id === id);
         if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
         }
      }
      setCart(savedCart);
   }, [products]);

   const handleAddToCart = (selectedProduct) => {
      let newCart = [];
      const existInCart = cart.find((product) => product.id === selectedProduct.id);
      if (!existInCart) {
         selectedProduct.quantity = 1;
         newCart = [...cart, selectedProduct];
      } else {
         const rest = cart.filter((product) => product.id !== selectedProduct.id);
         existInCart.quantity = existInCart.quantity + 1;
         newCart = [...rest, existInCart];
      }
      setCart(newCart);
      addToLocalDb(selectedProduct.id);
   };

   return (
      <div className="shop-container">
         <div className="products-container">
            {products.map((product) => (
               <Product
                  key={product.id}
                  product={product}
                  handleAddToCart={handleAddToCart}
               ></Product>
            ))}
         </div>

         <div className="cart-container">
            <Cart cart={cart} handleDeleteCart={handleDeleteCart}>
               <Link to={"/orders"} className="btn-review-order order-btn">
                  <p>Review Order</p>
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
               </Link>
            </Cart>
         </div>
      </div>
   );
};

export default Shop;

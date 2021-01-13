import React from 'react';
import "./product.css";
import { useStateValue } from "../../Stateprovider";


function Product({id, title, price, rating, image}) {
    const [{ cart },dispatch] = useStateValue();
    const addtocart = () => {
     dispatch({
     type:"ADD_TO_CART",
     item:{
         id,
         title,
         image,
         price,
         rating
     }
     })
    };
    return (
        <div className="product">
        <div className="product__container">
        <p>{title}</p>
            <p className="product__price">
            <small>$</small><strong>{price}</strong>
            </p>
           <div className="product__rating">
          {
              Array(rating)
              .fill()
              .map((n) => (<p>🌟</p>))
          }
        </div>  
        </div>
        <img src={image} alt="product"/>
        <button onClick={addtocart}>add to cart</button>
        </div>
    )
}

export default Product;

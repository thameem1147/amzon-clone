import React from 'react';
import "./checkoutpro.css";
import { useStateValue } from "../../Stateprovider";

function Checkoutpro({ id, title, image, price, rating}) 
{
    const [{ cart }, dispatch] = useStateValue();
    const removefromcart = () => {
     dispatch({
         type:"REMOVE_FROM_CART",
         id:id,
     })
    }
    return (
         <div className="checkoupro">
              <img className="checkoutpro__img" src={image} alt="img"/>
             <div className="checkoutpro__info" >
                  <p className="checkoutpro__title">{title}</p>
                  <p className="checkoutpro__price">
                    <small>$</small>
                    <strong>{price}</strong>
                    </p>
              <div className="productpro__rating">
         {  
               Array(rating)
               .fill()
               .map((n) => (<p>🌟</p>))
         }
              </div>  
              <button className="checkoutpro__button" onClick={removefromcart}>Remove from cart</button>
             </div>
        </div>
    )
}

export default Checkoutpro;

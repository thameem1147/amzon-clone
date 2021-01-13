import React from 'react';
import { useStateValue } from "../../Stateprovider";
import "./checkout.css";
import CheckoutPro from "../checkoutproduct/Checkoutpro";
import Subtotal from "../subtotal/Subtotal";

function Checkout() {
    const [{ cart }] = useStateValue();
    return (
       <div className="checkout">
          <div>
           <img className="checkout__img"
           alt="image" 
           src="https://blog.3dcart.com/hs-fs/hubfs/image4-2.png?width=1413&height=299&name=image4-2.png"/>
         {cart?.length === 0 ? (
             <div>
                 <h2>your cart is empty</h2>
                 <p>add one or more items to view cart</p>
             </div>
         ) : (
             <div>
             <h2 className="checkout__carts">your shopping cart is</h2>
             {cart.map(item => (
                 <CheckoutPro
                 id={item.id} 
                 title={item.title} 
                 image={item.image} 
                 price={item.price} 
                 rating={item.rating}
                 />))}
             </div>
              )} 
              </div>
              {cart?.length > 0 && (
                  <div className="checkout__right">
                      <Subtotal />
                  </div>
              )}
              </div>
    )
}
export default Checkout;

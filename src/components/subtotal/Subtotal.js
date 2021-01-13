import React from 'react';
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../Stateprovider";
import {getcarttotal} from "../../reducer";

function Subtotal() {
    const [{ cart },dispatch] = useStateValue();
    return (
        <div className="subtotal">
        <CurrencyFormat 
        renderText={(value) =>(
            <>
            <p>
                Subtotal ({cart.length} items) : <strong>{`${value}`}</strong>
                </p>
            <small className="subtotal__gift">
                <input type="checkbox" />this order contains gift
            </small>
            </>
        )}
            desimalScale={2}
            value={getcarttotal(cart)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal;

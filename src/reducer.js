export const initialstate = {
    cart: [{}],user:null,
};
export const getcarttotal = (cart) =>
cart?.reduce((amount, item) => item.price + amount,0);
 function reducer(state, action) {
     switch(action.type) {
         case "SET_USER":
             return {
                 ...state,
                 user: action.user
             }
  case "ADD_TO_CART":
     return {...state,
    cart: [...state.cart,action.item]
};
  case "REMOVE_FROM_CART":
    let newcart = [...state.cart];
    const index = state.cart.findIndex((newcart) => newcart.id === action.id);
    if (index >= 0) {
        newcart.splice(index, 1);
    }else {
        console.warn(`cant remove product (id: ${action.id} as its not exist)`);
    }  return {...state, cart:newcart};
    default:
        return state;
     }
 }
 export default reducer;
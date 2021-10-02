import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cartConstants";



export const cartReducer=(state={cartItems:[]},action)=>{
    switch(action.type){
        case ADD_TO_CART:
        const item=action.payload;
      const exist= state.cartItems.find(pd=>pd.id===item.id);
      if(exist)
      {
         return;
      }
      return {...state,cartItems:[...state.cartItems,item]};

      case REMOVE_FROM_CART:
        return {...state,cartItems:state.cartItems.filter(pd=>pd.id!==action.payload)}

        default:
            return state;
    }
}
import { ADD_PRODUCT_BASKET , GER_NUMBERS_BASKET ,UP_PRODUCT , DOWN_PRODUCT } from "../actions/types";
let myCart = JSON.parse(localStorage.getItem('myCart'));
if(!myCart){
    myCart = [];
}
const initialState = {
    basketNumber: myCart.length,
    cart : myCart
}

export default (state = initialState , action) => {
    switch(action.type){
        case ADD_PRODUCT_BASKET:
            let myCart = JSON.parse(localStorage.getItem('myCart'));
            return{
                basketNumber: state.basketNumber + 1,
                cart : myCart
            }
        case UP_PRODUCT:
            state.cart.map((item,key) => {
                if(item.id == action.payload){
                    state.cart[key].quantity = state.cart[key].quantity + 1; 
                }
            })
            localStorage.setItem('myCart', JSON.stringify(state.cart));
            return {
                ...state
            }
        case DOWN_PRODUCT:
            state.cart.map((item,key) => {
                if(item.id == action.payload){
                    if(state.cart[key].quantity > 1){
                        state.cart[key].quantity = state.cart[key].quantity - 1;     
                    }
                    
                }
            })
            localStorage.setItem('myCart', JSON.stringify(state.cart));
            return {
                ...state
            }
        case GER_NUMBERS_BASKET:
            return {
                ...state
            }
        default: 
            return state;
    }
}
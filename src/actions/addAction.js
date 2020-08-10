import { ADD_PRODUCT_BASKET } from './types';

export const addBasket = () => {
    return (dispatch) => {
        dispatch({
            type: ADD_PRODUCT_BASKET
        })
    } 
}
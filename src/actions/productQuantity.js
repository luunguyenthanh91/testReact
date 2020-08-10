import { UP_PRODUCT , DOWN_PRODUCT } from './types';

export const productQuantity = (action, id) => {
    return(dispatch) => {
        dispatch({
            type : action === "DOWN_PRODUCT" ? DOWN_PRODUCT : UP_PRODUCT,
            payload : id
        })
    }
}
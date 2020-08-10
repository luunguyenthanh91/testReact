import { GER_NUMBERS_BASKET } from './types';

export const getNumbers = () => {
    return(dispatch) => {
        dispatch({
            type: GER_NUMBERS_BASKET
        });
    }
}
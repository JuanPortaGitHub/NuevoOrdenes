import { CLICK_OPEN_MENU } from "./ActionTypes";

export const clickMenuOpen = value => ({
    type: CLICK_OPEN_MENU,
    newValue: value
});

export const addOrder = (order) =>{

    return (dispatch) =>{
        dispatch({
            type: "addOrder",
            payload: order
        })
    }
}

export const filterOrder = (order) =>{

    return (dispatch) =>{
        dispatch({
            type: "filterOrder",
            payload: order
        })
    }
}
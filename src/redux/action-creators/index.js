import { CLICK_OPEN_MENU } from "./ActionTypes";

export const clickMenuOpen = value => ({
    type: CLICK_OPEN_MENU,
    newValue: value
});

export const ADD_ORDER = (order) =>{

    return (dispatch) =>{
        dispatch({
            type: "addOrder",
            payload: order
        })
    }
}

export const FILTER_ORDER = (order) =>{

    return (dispatch) =>{
        dispatch({
            type: "filterOrder",
            payload: order
        })
    }
}

export const CREATE_ORDERS_DATA = (data) =>{
console.log(data)
    return (dispatch) =>{
        dispatch({
            type: "CREATE_ORDERS_DATA",
            payload: data
        })
    }
}

export const FETCH_ORDERS = (data) =>{
    console.log('datafetched', data)
        return (dispatch) =>{
            dispatch({
                type: "FETCH_ORDERS",
                payload: data
            })
        }
    }
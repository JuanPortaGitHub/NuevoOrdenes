import axios from "axios";
import { url } from "../axios";
import * as actionCreators from "../../redux/action-creators/index"

  export const getOrders = (pagNumber = 1) => async dispatch => {
    console.log('entre aca')

    await axios
      .get(url + `?page=${pagNumber}`)
      .then((res) => {
        const { orders } = res.data;
        dispatch(actionCreators.FETCH_ORDERS(orders.data));        
      })
      .catch((error) => {
        dispatch({
          type: "ERROR",
          payload: error
      })
      });

}

export const fetchCreateOrdersData = () => async dispatch => {
  console.log('entre aca2')
  await axios
    .get("http://panelordenes.test/ordenes/create")
    .then((res) => {
      const data = res.data;
      dispatch(actionCreators.CREATE_ORDERS_DATA(data));
    })
    .catch((error) => {
      dispatch({
        type: "ERROR",
        payload: error
    })
    });
};
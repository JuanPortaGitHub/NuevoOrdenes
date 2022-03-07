import axios from "axios";
import { url } from "../axios";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../redux/action-creators/index"

const AC = bindActionCreators(actionCreators, dispatch)
  console.log('Action Creators', AC)


export const  getOrders = async () => {    
    
  await axios
    .get(url)
    .then((res) => {
      const { orders } = res.data;
      dispatch(AC.CREATE_ORDERS_DATA(orders.data));        
    })
    .catch((error) => {
      return error;
    });
    

};


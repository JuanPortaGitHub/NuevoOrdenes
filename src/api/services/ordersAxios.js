// import axios from "axios";
// import { url } from "../axios";
// import { bindActionCreators } from "redux";
// import * as actionCreators from "../../redux/action-creators/index"
// import { useDispatch } from "react-redux";


// export const  getOrders = async () => {    
  
//   const dispatch = useDispatch()
//   const AC = bindActionCreators(actionCreators, dispatch)
//   console.log('Action Creators', AC)


//   await axios
//     .get(url)
//     .then((res) => {
//       const { orders } = res.data;
//       dispatch(AC.CREATE_ORDERS_DATA(orders.data));        
//     })
//     .catch((error) => {
//       return error;
//     });
    

// };


import axios from "axios";
import { url } from "../axios";


export const getOrders = () =>{
    axios.get(url, {
        
        mode: 'no-cors',
        
      }).then(res => {
        const orders = res.data;
        console.log(orders)
        return orders
}
      ).catch(error => {return error})}



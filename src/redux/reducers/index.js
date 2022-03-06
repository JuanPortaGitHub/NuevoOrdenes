import { combineReducers } from 'redux';
import { MenuOpenReducer } from './MenuOpenReducer';
import { ClientsReducer } from './ClientsReducer';
import { OrdersReducer } from './OrdersReducer';

export const Reducers = combineReducers({
  menuState: MenuOpenReducer,
  clients: ClientsReducer,
  orders: OrdersReducer
});
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./i18n";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import cartReducer, { getTotal } from "./features/cartSlice";
import ticketReducer, {ticketFetch} from "./features/ticketSlice";
import { ticketApi } from "./features/ticketApi";
import userReducer from "./features/authSlice";
const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer:{
    tickets : ticketReducer,
    cart    : cartReducer,
    user    : userReducer,
    [ticketApi.reducerPath] : ticketApi.reducer

  },
  middleware : (getDefaultMiddleware) =>{
    return getDefaultMiddleware().concat(ticketApi.middleware);
  }
  
});


store.dispatch(ticketFetch());
store.dispatch(getTotal());
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

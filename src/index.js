import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from 'react-redux'

//import axios from './config/axios'
import configureStore from './store/configureStore'
import {startGetUser} from './actions/userAction'
import { startSetCustomers } from './actions/customerAction'
import { startSetDepartment } from './actions/departmentAction'
import { startSetEmployee } from './actions/employeeAction'
import { startSetTicket } from './actions/ticketAction'

const store = configureStore()
//console.log(store.getState())

store.subscribe(() => {
  console.log(store.getState())
})

// handle page reload
if(localStorage.getItem('authToken')){
  store.dispatch(startGetUser())    
  store.dispatch(startSetCustomers())
  store.dispatch(startSetDepartment())
  store.dispatch(startSetEmployee())
  store.dispatch(startSetTicket())
}

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  jsx,
  document.getElementById('root')
);



import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './components/static/Home'
import Register from './components/auth/Register' 
import Login from './components/auth/Login'
import { startUserLogout } from './actions/userAction'

import Customer from './components/customers/Customer'
import CustomerForm from './components/customers/CustomerForm'
import AddCustomer from './components/customers/AddCustomer'
import CustomerShow from './components/customers/CustomerShow'
import EditCustomer from './components/customers/EditCustomer'

import Department from './components/departments/Department'
import DepartmentForm from './components/departments/DepartmentForm'
import DepartmentShow from './components/departments/DepartmentShow'
import EditDepartment from './components/departments/EditDepartment'

import Employee from './components/employees/Employee'
import AddEmployee from './components/employees/AddEmployee'
import EmployeeShow from './components/employees/EmployeeShow'
import EmployeeForm from './components/employees/EmployeeForm'
import EditEmployee from './components/employees/EditEmployee'

import Ticket from './components/tickets/Ticket'
import AddTicket from './components/tickets/AddTicket'
import TicketForm from './components/tickets/TicketForm'




function App(props) {

  const handleLogout = () => {
      props.dispatch(startUserLogout())
  }

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Ticket Master</h1>
        <Link to="/" >Home</Link>

        {
          Object.keys(props.user).length !== 0 ? (
            <div>
            <Link to="/" >Account</Link>
            <Link to="/customer" >Customer</Link>
            <Link to="/department" >Department</Link>
            <Link to="/employee" >Employee</Link>
            <Link to="/ticket" >Ticket</Link>
            <Link to="#" onClick={handleLogout} >Logout</Link>
            </div>
          ) :
          (
            <div>
                <Link to="/users/Register" >Register</Link>
                <Link to="/users/Login" > Login </Link>
            </div>
          )
        }

        <Switch>
          <Route path="/" component={Home} exact={true}/>
          <Route path="/users/register" component={Register} />
          <Route path="/users/login" component={Login} />

          <Route path="/customer" component={Customer} exact={true} />
          <Route path="/customerform" component={CustomerForm}exact={true}/>
          <Route path="/customers/:id" component={CustomerShow} exact={true} />
          <Route path="/customers/addcustomer" component={AddCustomer} />
          <Route path="/customers/editcustomer/:id" component={EditCustomer} />

          <Route path="/department" component={Department} exact={true}/>
          <Route path="/departmentform" component={DepartmentForm} exact={true}/>
          <Route path="/departments/:id" component={DepartmentShow} exact={true} />
          <Route path="/departments/editdepartment/:id" component={EditDepartment} />

          <Route path="/employee" component={Employee} exact={true} />
          <Route path="/employees/addemployee" component={AddEmployee} exact={true} />
          <Route path="/employees/:id" component={EmployeeShow} exact={true} />
          <Route path="/employeeform" component={EmployeeForm} exact={true}/>
          <Route path="/employees/editemployee/:id" component={EditEmployee} />

          <Route path="/ticket" component={Ticket} exact={true} />
          <Route path="/addticket" component={AddTicket} exact={true} />
          <Route path="/ticketform" component={TicketForm} />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App) ;



import React from 'react'
import CustomerForm from './CustomerForm'

import {connect} from 'react-redux'
import { startAddCustomers } from '../../actions/customerAction'
//import {startAddCustomers}  from '../../actions/customerAction'


// class AddCustomer extends React.Component {  

//     handleEditSubmit = (customer) => {
        
//         const redirect = () => this.props.history.push('/customers')
//         this.props.dispatch(startAddCustomer(customer,redirect))
//     }
//     render(){
//         return (
//             <div>
//                 <h2>Add Customer</h2>
//                 <CustomerForm handleEditSubmit = {this.handleEditSubmit}/>
//             </div>
//         )
//     }
// }

function AddCustomer(props){  

        const  handleEditSubmit = (customer) => {
        
        const redirect = () => props.history.push('/customer')
        props.dispatch(startAddCustomers(customer,redirect))
    }
        return (
            <div>
                {/* <h2>Add Customer</h2> */}
                <CustomerForm handleEditSubmit = {handleEditSubmit}/>
            </div>
        )
    }

export default connect()(AddCustomer)





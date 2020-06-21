import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { startRemoveCustomer} from '../../actions/customerAction'

function Customer(props){
    //console.log(props.customer)

    const handleRemove = (id) => {
        const confirmRemove = window.confirm('are you sure')
        if(confirmRemove){
        props.dispatch(startRemoveCustomer(id))
        }
    }

    // const handleShow = (id) => {
    //     props.history.push(`/customershow/${id}`)
    // }

    
        return(
            <div>
                <h1>Customers - {props.customer.length} </h1>
                <table border="1" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                       {
                           props.customer.map(ele => {
                               return (
                                   <tr key={ele._id}>
                                       <td> {ele._id} </td>
                                       <td> {ele.name} </td>
                                       <td> {ele.email} </td>
                                       <td> {ele.mobile} </td>
                                       <td><Link to={`/customers/${ele._id}`}><button>show</button></Link></td>
                                       <td> <button onClick={ () => handleRemove(ele._id)}>remove</button> </td>
                                   </tr>
                               )
                           })
                       }
                </tbody>
            </table>
            <Link to="/customers/addcustomer/customer">Add Customer</Link>
            </div>
        )
}

const mapStateToProps = (state) => {
    return {
        customer: state.customer
    }
}

export default connect(mapStateToProps)(Customer)


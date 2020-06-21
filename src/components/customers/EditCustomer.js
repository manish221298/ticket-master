import React from 'react'
import { connect } from 'react-redux'

//import CustomerForm from './CustomerForm'
import { startEditCustomer } from '../../actions/customerAction'
import CustomerForm from './CustomerForm'


function EditCustomer(props){

    const handleEditSubmit = (customer) => {
        const redirect = () => {
            return props.history.push(`/customers/${customer.id}`)
        }
        props.dispatch(startEditCustomer(customer, redirect))
    }

    console.log(props)
    return (
        <div>
            
            {props.customer && (
                <div>
                    {/* <h1>Edit Customer</h1> */}
                    {props.customer.name && <CustomerForm customer = {props.customer} handleEditSubmit = {handleEditSubmit} />}
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        customer: state.customer.find(custom => custom._id === id)
    }
}

export default connect(mapStateToProps)(EditCustomer)



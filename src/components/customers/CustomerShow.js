import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function CustomerShow(props){
    //console.log(props)
    //console.log(props.customer)
    return (
        <div>
            <h1>Customer Show</h1>
            {props.customer && (
                <div>
                     <h2>{props.customer.name} - {props.customer.email} </h2>
                     <Link to={`/customers/editcustomer/${props.customer._id}`} >Edit</Link>
                </div>
            )}
            
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const ids = props.match.params.id
    return {
        customer: state.customer.find(custom => custom._id === ids)
    }
}

export default connect(mapStateToProps)(CustomerShow)


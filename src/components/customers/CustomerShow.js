import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

function CustomerShow(props){
    //console.log(props)
    //console.log(props.customer)
    return (
        <Container>
            <h1 className="mt-5" >Customer Show</h1>
            {props.customer && (
                <div>
                     <h2>{props.customer.name} - {props.customer.email} </h2>
                     <Link to={`/customers/editcustomer/${props.customer._id}`} >Edit</Link>
                </div>
            )}
            
        </Container>
    )
}

const mapStateToProps = (state, props) => {
    const ids = props.match.params.id
    return {
        customer: state.customer.find(custom => custom._id === ids)
    }
}

export default connect(mapStateToProps)(CustomerShow)


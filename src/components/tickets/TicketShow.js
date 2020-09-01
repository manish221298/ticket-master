import React from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'

function TicketShow(props){
    console.log(props)

    const findCustomer = (id) => {
        return props.customer.find(customer => customer._id === id)
    }

    const findDepartment = (id) => {
        return props.department.find(department => department._id === id)
    }

    const findEmployee = (id) => {
        return props.employee.map(emp  => emp._id === id)
    }

    return (
        
        <div>
            <h1>Ticket Show</h1>
            {props.tickets && (
                <div>
                    <p> <b>Customer:- {findCustomer(props.tickets.customer)?.name}</b> </p>
                    <p> <b>Department:- {findDepartment(props.tickets.department)?.name}</b> </p>
                    <p> <b>Employee:- {findEmployee(props.tickets.employees.find(emp => emp._id))?.name} </b> </p>
                          {/* <p>Employee  {
                                
                            }</p> */}
                    <p><b>Messages:-  {props.tickets.message} </b></p>
                    <p><b>Priority:- {props.tickets.priority} </b></p>
                    <Link to={`/tickets/editticket/${props.tickets._id}`} >Edit</Link>
                  </div>  
                    
            )}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        tickets: state.ticket.find(ticket => ticket._id === id), 
        ticket: state.ticket,
        customer: state.customer,
        department: state.department,
        employee: state.employee,
    }
}

export default connect(mapStateToProps)(TicketShow)
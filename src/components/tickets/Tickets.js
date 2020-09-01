import React from 'react'
import { connect } from 'react-redux'
import { startRemoveTicket } from '../../actions/ticketAction'
import { Link } from 'react-router-dom'

import { Container, Table } from 'react-bootstrap'

function Tickets(props){

 const handleRemove=(id)=>{
     const redirect = () => {
         props.history.push('/tickets')
     }
     const confirm=window.confirm("are you sure?")
     if(confirm){
        props.dispatch(startRemoveTicket(id, redirect))

     } 
    }

    const findDepartment = (id) => {
        return props.department.find(department => department._id === id)
    }

    const findCustomer = (id) => {
        return props.customer.find(customer => customer._id === id)
    }



    return (
        <Container>
            <h3 className="mt-5" >Tickets-{props.ticket.length}</h3>
            <Table responsive striped>
                <thead className="thead-dark" >
                    <tr>
                        <th>Code No.</th>
                        <th>Customer</th>
                        <th>Department</th>
                        <th>Employees</th>
                        <th>Message</th>
                        <th>Priority</th>
                        <th>Action</th>
                        <th>Remove</th>
                        <th>Complete</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            props.ticket.map((ticket, i) => {
                                const emp1 = ticket.employees.find(ele => (ele._id))
                                return (
                                    <tr key = {ticket._id} >
                                        <td> {ticket.code} </td>
                                        <td> {findCustomer(ticket.customer)?.name} </td>
                                        <td> {findDepartment(ticket.department)?.name} </td>
                                        <td>{(props.employee !== 0) && (props.employee.find(ele => ele._id == emp1._id)?.name)}</td>
                                        {/* <td> {ticket._id} </td> */}
                                        <td> {ticket.message} </td>
                                        <td> {ticket.priority} </td>
                                        <td> <Link to={`tickets/${ticket._id}`} ><button className="btn btn-info" >show</button></Link> </td>

                                        <td> <button className="btn btn-danger" onClick = {() => {
                                            handleRemove(ticket._id)
                                        }} >remove</button> </td>

                                        <td> <input type="checkbox" /> </td>
                                    </tr>
                                )
                            })
                        }
                </tbody>
            </Table>
            <Link to="/AddTicket">Add Ticket</Link>

        </Container>
    )
}
const mapStateToProps=(state)=>{
    return{
        ticket: state.ticket,
        customer: state.customer,
        department: state.department,
        employee: state.employee

    }
}

export default connect(mapStateToProps)(Tickets)

import React from 'react'
import { connect } from 'react-redux'

import TicketForm from './TicketForm'
import { startAddTicket } from '../../actions/ticketAction'


function AddTicket(props){
    
    const handleTicketSubmit = (ticket) => {
        const redirect = () => {
            props.history.push('/tickets')
        }
        props.dispatch(startAddTicket(ticket, redirect))
    }

    return (
        <div>
            <h1>Add Ticket</h1>
            <TicketForm handleTicketSubmit={ handleTicketSubmit } />
        </div>
    )
}
export default connect()(AddTicket)
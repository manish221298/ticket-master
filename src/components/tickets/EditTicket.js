import React from 'react'
import { connect } from 'react-redux'
import TicketForm from './TicketForm'
import { startEditTicket } from '../../actions/ticketAction'

function EditTicket(props){

    const handleTicketSubmit = (ticket) => {
        const redirect = () => {
          return  props.history.push(`/tickets/${ticket.id}`)
        }
        props.dispatch(startEditTicket(ticket, redirect))
    }

    console.log(props)
    return (
        <div>
            {props.ticket && (
                <div>
                    <h1>Edit Ticket</h1>
                    <TicketForm ticket={props.ticket} handleTicketSubmit={handleTicketSubmit} />
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        ticket: state.ticket.find(ticket => ticket._id === id)
    }
}

export default connect(mapStateToProps)(EditTicket)
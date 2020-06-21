import axios from "../config/axios"

export const setTicket = (ticket) => {
    return { type: 'SET_TICKET', payload: ticket }
}

export const startSetTicket = () => {
        return (dispatch) => {
            axios.get('/tickets', {
                headers: {
                    'x-auth': localStorage.getItem('authToken')
                }
            })
            .then((response) => {
                const ticket = response.data
                dispatch(setTicket(ticket))
            })
        }
}

export const addTicket = (ticket) => {
    return { type: 'ADD_TICKET', payload: ticket }
}

export const startAddTicket = (ticket) => {
    return (dispatch) => {
        axios.post('/tickets', ticket, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else{
                alert('successfully added')
                const ticket = response.data
                dispatch(addTicket(ticket))
            }
        })
    }
}

export const removeTicket = (ticket) => {
    return { type: 'REMOVE_TICKET', payload: ticket }
}

export const startRemoveTicket = (id) => {
    return (dispatch) => {
        axios.delete(`tickets/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            const ticket = response.data
            dispatch(removeTicket(ticket))
        })
    }
}
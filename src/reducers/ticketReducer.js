const ticketReducer = (state = [], action) => {
    switch(action.type){

        case 'SET_TICKET': {
            return state.concat(state, action.payload)
        }

        case 'ADD_TICKET': {
            return state.concat(action.payload)
        }

        case 'REMOVE_TICKET': {
            return state.map(ticket => ticket._id !== action.payload._id)
        }

        case 'EDIT_TICKET': {
            return state.map(ele => {
                if(ele._id === action.payload._id){
                    return Object.assign({}, ele, action.payload)
                }
                else{
                    return Object.assign({}, ele, action.payload)
                }
            })
        }

        default: {
            return [...state]
        }
    }
}
export default ticketReducer
 //const customerInitialState = []

const customerReducer = (state = [], action) => {
    const initialState = []
    switch(action.type){
        case 'SET_CUSTOMERS': {
            return [].concat(state = initialState, action.payload)
        }

        // case "ADD_CUSTOMERS": {
        //     return state.concat(action.payload)
        // }

        case "ADD_CUSTOMERS": {
            return [...state, action.payload]
        }

        case 'EDIT_CUSTOMER': {
            return state.map(custom => {
                if(custom._id === action.payload._id){
                    return Object.assign({}, custom, action.payload)
                }
                else{
                    return Object.assign({}, custom)
                }
            })
        }

        case 'REMOVE_CUSTOMER': {
            return state.filter(customer => {
                return customer._id !== action.payload._id
            })
        }

        default: {
            return [...state]
        }
    }
}
export default customerReducer


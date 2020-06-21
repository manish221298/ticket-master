const departmentReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_DEPARTMENT': {
            return state.concat(action.payload)
        }

        case 'SET_DEPARTMENT': {
            return state.concat(state, action.payload)
        }

        case 'REMOVE_DEPARTMENT': {
            return state.filter(dept => {
                return dept._id !== action.payload._id
            })
        }

        case 'EDIT_DEPARTMENT': {
            return state.map(dept => {
                if(dept._id === action.payload._id){
                    return Object.assign({}, dept, action.payload)
                }
                else{
                    return Object.assign({}, dept)
                }
            })
        }

        default: {
            return [...state]
        }
    }
}
export default departmentReducer
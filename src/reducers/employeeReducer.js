


const employeeReducer = (state = [], action) => {
    switch(action.type){

        case 'SET_EMPLOYEE': {
            return state.concat(state, action.payload)
        }

        case 'ADD_EMPLOYEE': {
            return state.concat(action.payload)
        }

        case 'REMOVE_EMPLOYEE': {
            return state.filter(emp => {
                return emp._id !== action.payload._id
            })
        }

        case 'EDIT_EMPLOYEE': {
            return state.map(emp => {
                if(emp._id === action.payload._id){
                    return Object.assign({}, emp, action.payload)
                }
                else{
                    return Object.assign({}, emp)
                }
            })
        }

        case 'updateEmployeeDepartment': {
            return state.map(emp => {
                if(emp.department._id === action.payload._id){
                    emp.department = action.payload._id
                    return {...emp}
                }
                else{
                    return {...emp}
                }
            })
        }

        default: {
            return [...state]
        }
    }
}
export default employeeReducer
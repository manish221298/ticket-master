import axios from "../config/axios"

export const setEmployee = (employee) => {
    return { type: 'SET_EMPLOYEE', payload: employee }
}

export const startSetEmployee = () => {
    return (dispatch) => {
        axios.get('/employees', {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            const employee = response.data
            dispatch(setEmployee(employee))
        })
    }
}

export const addEmployee = (employee) => {
    return { type: 'ADD_EMPLOYEE', payload: employee }
}

export const startAddEmployee = (formData, redirect) => {
    return (dispatch) => {
        axios.post('/employees', formData, {
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
                const employee = response.data
                dispatch(addEmployee(employee))
                redirect()
            }
        })
    }
}

export const removeEmployee = (employee) => {
    return { type: 'REMOVE_EMPLOYEE', payload: employee }
}

export const startRemoveEmployee = (id) => {
    return (dispatch) => {
        axios.delete(`/employees/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            const employee = response.data
            dispatch(removeEmployee(employee))
        })
    }
}

export const editEmployee = (employee) => {
    return { type: 'EDIT_EMPLOYEE', payload: employee }
}

export const startEditEmployee = (employee, redirect) => {
    return (dispatch) => {
        axios.put(`/employees/${employee.id}`, employee, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else{
                alert('Updated successfully')
                const employee = response.data 
                dispatch(editEmployee(employee))
                redirect()
            }
        })
    }
}

export const updateEmployeeDepartment = (department) => {
    return {
        type: 'UPDATE_EMPLOYEE_DEPARTMENT',
        payload: department
    }
}


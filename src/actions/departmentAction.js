import axios from "../config/axios"
import swal from "sweetalert"

export const AddDepartment = (department) => {
    return { type: 'ADD_DEPARTMENT', payload: department }
}

export const startAddDepartment = (formData, redirect) => {
    return (dispatch) =>{
        axios.post('/departments', formData, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            //console.log(response.data)
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else{
                swal({
                    title: "successfull added",
                    icon: "success"
                })
                const department = response.data
                dispatch(AddDepartment(department))
            }
        })
    }
}

export const setDepartment = (department) => {
    return { type: 'SET_DEPARTMENT', payload: department }
}

export const startSetDepartment = () => {
        return (dispatch) => {
            axios.get('/departments', {
                headers: {
                    'x-auth': localStorage.getItem('authToken')
                }
            })
            .then((response) => {
                const department = response.data
                dispatch(setDepartment(department))
            })
        }
}

export const removeDepartment = (department) => {
    return { type: 'REMOVE_DEPARTMENT', payload: department }
}

export const startRemoveDepartment = (id) => {
    return (dispatch) => {
        axios.delete( `/departments/${id}`, {  
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            const department = response.data
            dispatch(removeDepartment(department))
        })
    }
}

export const editDepartment = (department) => {
    return { type: 'EDIT_DEPARTMENT', payload: department }
}

export const startEditDepartment = (department, redirect) => {
    return (dispatch) => {
        axios.put(`/departments/${department.id}`, department, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        } )
        .then((response) => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else{
                swal({
                    title: 'updated successfully',
                    icon: "success"
                })
                const department = response.data
                dispatch(editDepartment(department))
                redirect()
            }
        })
    }
}
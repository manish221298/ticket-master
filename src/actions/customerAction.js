import axios from "../config/axios"

export const AddCustomers = (customer) => {
    return { type:'ADD_CUSTOMERS', payload:customer }
}

export const startAddCustomers = (formData, redirect) => {
    return (dispatch) =>{
        axios.post('/customers', formData, {
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
                alert('successfully added')
                const customer = response.data
                redirect()
                dispatch(AddCustomers(customer))
                
            }
        })
    }
}

export const setCustomers = (customer) => {
    return { type: 'SET_CUSTOMERS', payload: customer }
}

export const startSetCustomers = () => {
        return (dispatch) => {
            axios.get('/customers', {
                headers: {
                    'x-auth': localStorage.getItem('authToken')
                }
            })
            .then((response) => {
                const customer = response.data
                dispatch(setCustomers(customer))
            })
        }
}

export const removeCustomer = (customer) => {
    return { type: 'REMOVE_CUSTOMER', payload: customer }
}

export const startRemoveCustomer = (id) => {
    return (dispatch) => {
        axios.delete(`/customers/${id}`, { 
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            const customer = response.data
            dispatch(removeCustomer(customer))
        })
    }
}

export const editCustomer = (customer) => {
    return { type: 'EDIT_CUSTOMER', payload: customer }
}

export const startEditCustomer = (customer, redirect) => {
    return (dispatch) => {
        axios.put(`/customers/${customer.id}`, customer, {
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
                const customer = response.data 
                dispatch(editCustomer(customer))
                redirect()
            }
        })
    }
}



// // add element to an array 
// const state = [10]
// const value = [10,20]
// // es5
// //push
// // console.log(state.push(value))

// // concat
// // list 
// console.log([].concat(value))

// // add 
// console.log(state.concat(value))

// // es6
// // spread operator
// // list 
// console.log([...value])

// // add 
// console.log([...state, ...value ])


// // object 
// const customer = { name: 'ani', city: 'bangalore'}
// const obj = { name: 'ani', city: 'mysore'}

// // update object - es5
// console.log(Object.assign({}, customer, obj))

// // update object - es6
// console.log({...customer, ...obj}) 


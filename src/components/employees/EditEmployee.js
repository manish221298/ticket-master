import React from 'react'
import { connect } from 'react-redux'
import { startEditEmployee } from '../../actions/employeeAction'
import EmployeeForm from './EmployeeForm'


function EditEmployee(props){

    const handleEmployeeSubmit = (employee) => {
        const redirect = () => {
            return props.history.push(`/employees/${employee.id}`)
        }
        props.dispatch(startEditEmployee(employee, redirect))
        // props.dispatch(updateEmployeeDepartment (department, redirect))
    }

    //console.log(props)  
    return (
        <div>
            
            {props.employee && (
                <div>
                    <h1>Edit Employee</h1>
                    {props.employee.name && <EmployeeForm employee = {props.employee} handleEmployeeSubmit = {handleEmployeeSubmit} />}
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        employee: state.employee.find(emp => emp._id === id),
        // department: state.department
    }
}

export default connect(mapStateToProps)(EditEmployee)


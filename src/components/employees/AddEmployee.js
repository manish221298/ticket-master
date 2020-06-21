import React from 'react'
import { connect } from 'react-redux'
import {startAddEmployee}  from '../../actions/employeeAction'
import EmployeeForm from './EmployeeForm'

class AddEmployee extends React.Component{


    handleEmployeeSubmit = (employee) => {
        
        const redirect = () => this.props.history.push('/employee')
        this.props.dispatch(startAddEmployee(employee,redirect))
    }

    render(){
        return (
            <div>
                <h2>Add Employee</h2>
                <EmployeeForm handleEmployeeSubmit = {this.handleEmployeeSubmit} />
            </div>
        )
    }
    
}



export default connect()(AddEmployee)
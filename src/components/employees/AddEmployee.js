import React from 'react'
import { connect } from 'react-redux'
import {startAddEmployee}  from '../../actions/employeeAction'
import EmployeeForm from './EmployeeForm'
import { Container } from 'react-bootstrap'

class AddEmployee extends React.Component{


    handleEmployeeSubmit = (employee) => {
        
        const redirect = () => this.props.history.push('/employee')
        this.props.dispatch(startAddEmployee(employee,redirect))
    }

    render(){
        return (
            <Container>
                <h2 className="mt-5" >Add Employee</h2>
                <EmployeeForm handleEmployeeSubmit = {this.handleEmployeeSubmit} />
            </Container>
        )
    }
    
}



export default connect()(AddEmployee)
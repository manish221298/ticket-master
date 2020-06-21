import React from 'react'
import { connect } from 'react-redux'
import { startEditDepartment } from '../../actions/departmentAction'
import DepartmentForm from './DepartmentForm'
//import { startEditDepartment } from '../../actions/departmentAction'

class EditDepartment extends React.Component{

    handleDepartmentSubmit = (department) => {
        const redirect = () => this.props.history.push(`/departments/${department.id}`)
        this.props.dispatch(startEditDepartment(department, redirect))
    }

    render(){
        return (
            <div>
                {this.props.department && (
                    <div>
                        <h1>Edit Department</h1>
                        {this.props.department.name &&  <DepartmentForm department = {this.props.department} handleDepartmentSubmit = {this.handleDepartmentSubmit} /> }
                    </div>
                )}
               
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        department: state.department.find(dept => dept._id === id )
    }
}

export default connect(mapStateToProps)(EditDepartment)
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import DepartmentForm from './DepartmentForm'
import {startAddDepartment} from '../../actions/departmentAction'
import { startRemoveDepartment } from '../../actions/departmentAction'

//import AddDepartment from './AddDepartment'

function Department(props){

   const handleDepartmentSubmit = (department) => {
        const redirect = () => props.history.push('/departments')
            props.dispatch(startAddDepartment(department,redirect))
     }

  const  handleRemove = (id) => {
      const confirm = window.confirm('are you sure')
      if(confirm){
        props.dispatch(startRemoveDepartment(id))
      }
    }

    return (
        <div>
            <h1>Departments - {props.department.length} </h1>

            <table border="1" cellSpacing="0">
                <thead>
                        {
                            props.department.map(dept => {
                                return (
                                    <tr key={dept._id}>
                                        <td> {dept.name}</td>
                                        <td> <Link to={`/departments/${dept._id}`} ><button>show</button></Link> </td>
                                        <td> <button onClick={ () => {
                                                handleRemove(dept._id)
                                        }} >remove</button> </td>
                                    </tr>
                                )
                            })
                        }
                </thead>
            </table>
            
            <h1>Add Department</h1>
            <DepartmentForm handleDepartmentSubmit = {handleDepartmentSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        department: state.department
    }
}

export default connect(mapStateToProps)(Department)




import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

import { startRemoveEmployee } from '../../actions/employeeAction'

function Employee(props){

    const handleRemove = (id) => {
        const confirm = window.confirm('are you sure')  
        if(confirm){
        props.dispatch(startRemoveEmployee(id))
        }
    }

    return (
        <div>
            <h1>Employees - {props.employee.length} </h1>

            <table border="1" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Department</th>
                        <th>Actions</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                       {
                           props.employee.map(ele => {
                               return (
                                   <tr key={ele._id}>
                                       <td> {ele._id} </td>
                                       <td> {ele.name} </td>
                                       <td> {ele.email} </td>
                                       <td> {ele.mobile} </td>
                                       <td> {props.department.filter(dept => dept._id === ele.department).map(em => em.name) } </td>
                                       <td> <Link to={`/employees/${ele._id}`} ><button>show</button></Link> </td>
                                       <td> <button onClick={ () => {
                                            handleRemove(ele._id)
                                       } } >remove</button> </td>
                                   </tr>
                               )
                           })
                       }
                </tbody>
            </table>
            <Link to="/employees/addemployee">Add Employee</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        employee: state.employee,
        department: state.department
    }
}

export default connect(mapStateToProps)(Employee)




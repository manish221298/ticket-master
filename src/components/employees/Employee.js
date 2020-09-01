import React from 'react'
import { Link } from 'react-router-dom'
import { connect} from 'react-redux'

import { startRemoveEmployee } from '../../actions/employeeAction'
import { Container, Table } from 'react-bootstrap'
import swal from "sweetalert"

function Employee(props){

    const handleRemove = (id) => {
        swal({
            title: "Are you sure ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Successfully Deleted", {	
                icon: "success",
              });
              props.dispatch(startRemoveEmployee(id)) 
            } 
          })
    }

    return (
        <Container>
            <h1 className="mt-5" >Employees - {props.employee.length} </h1>

            <Table responsive striped >
                <thead className="thead-dark" >
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
                                       <td> <Link to={`/employees/${ele._id}`} ><button className="btn btn-info" >show</button></Link> </td>
                                       <td> <button className="btn btn-danger" onClick={ () => {
                                            handleRemove(ele._id)
                                       } } >remove</button> </td>
                                   </tr>
                               )
                           })
                       }
                </tbody>
            </Table>
            <Link to="/employees/addemployee">Add Employee</Link>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        employee: state.employee,
        department: state.department
    }
}

export default connect(mapStateToProps)(Employee)




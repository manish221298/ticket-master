import React from 'react'
import { connect } from 'react-redux'

import DepartmentForm from './DepartmentForm'
import {startAddDepartment} from '../../actions/departmentAction'
import { startRemoveDepartment } from '../../actions/departmentAction'
import swal from "sweetalert"

import { Container, ListGroup, ButtonGroup, Button, Row, Col } from 'react-bootstrap'

//import AddDepartment from './AddDepartment'

function Department(props){

   const handleDepartmentSubmit = (department) => {
        const redirect = () => props.history.push('/departments')
            props.dispatch(startAddDepartment(department,redirect))
     }

  const  handleRemove = (id) => {
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
          props.dispatch(startRemoveDepartment(id)) 
        } 
      })
    }

    const handleShow = (id) => {
        props.history.push(`/departments/${id}`)
      }

    const button = {
        marginLeft: 850
    };

    return (
        <Container>
            <Row>
                <Col md={12} >
                    <h1 className="mt-5" >Departments - {props.department.length} </h1>
                        <ListGroup>
                                {
                                    props.department.map(dept => {
                                        return (
                                            <ListGroup.Item key={dept._id}> {dept.name}
                                                <ButtonGroup>
                                                    <Button className="btn btn-info" style={button} onClick={() => {handleShow(dept._id)}}>Show</Button>
                                                    <Button className="btn btn-danger ml-5" onClick={() => {handleRemove(dept._id)}}>remove</Button>
                                                </ButtonGroup>
                                            </ListGroup.Item>
                                        )
                                    })
                                }
                        </ListGroup>
                </Col>
            </Row>
            <DepartmentForm handleDepartmentSubmit = {handleDepartmentSubmit}/>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        department: state.department
    }
}

export default connect(mapStateToProps)(Department)




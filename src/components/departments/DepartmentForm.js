import React from 'react'
//import { connect } from 'react-redux'

// import { startAddDepartment } from '../../actions/departmentAction'

import { Container, Form, Row, Col } from 'react-bootstrap'

class DepartmentForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name: props.department ? props.department.name :''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: this.state.name
        }
        // this.props.dispatch(startAddDepartment(formData))
        this.props.department && (formData.id = this.props.department._id) 

        this.props.handleDepartmentSubmit(formData)


    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return (
            <Container>
                <Row>
                    <Col md={4}>
                            <h2 className="mt-5" >Add Department</h2>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Control
                                        type="text"
                                        name="name" 
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                    /><br/><br/>
                                    <input type="submit" value="Add" className="btn btn-secondary" />
                                </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default DepartmentForm
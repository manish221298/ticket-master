import React from 'react'
import { connect } from 'react-redux'

import { Container, Form } from 'react-bootstrap'

class EmployeeForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name: props.employee ? props.employee.name : '' ,
            email: props.employee ? props.employee.email : '',
            mobile: props.employee ? props.employee.mobile : '',
            department: props.employee ? props.employee.department : '' 
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            department: this.state.department
        }

        this.props.employee && (formData.id = this.props.employee._id)      

        this.props.handleEmployeeSubmit(formData)

    }

    handleChange = (e) => {
        if(e.target.type === 'select'){
            this.setState({
                [e.target.name]: e.target.value
            })
        }
        else{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    }

    render(){
        return(
            <Container>
                {/* <h1>Add Employee</h1> */}   
                <Form onSubmit={this.handleSubmit}>
                    <Form.Label htmlFor="name">Name:-</Form.Label>
                    <Form.Control 
                        type="text"
                        id="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    /> <br/><br/>

                    <Form.Label htmlFor="email">Email:-</Form.Label>
                    <Form.Control 
                        type="text"
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    /> <br/><br/>

                    <Form.Label htmlFor="mobile">Mobile:-</Form.Label>
                    <Form.Control
                        type="mobile"
                        id="mobile"
                        name="mobile"
                        value={this.state.mobile}
                        onChange={this.handleChange}
                    /> <br/><br/>

                    <Form.Label htmlFor="department">Department:-</Form.Label>
                    <Form.Control  as="select"  onChange={this.handleChange} name="department">
                    <option value="">select</option>
                        {this.props.department.map(depart=>{
                             return < option key={depart._id} value={depart._id}>{depart.name} </option>
                        })}
                    </Form.Control>
                    <br/><br/>
                    <input type="submit" value="Submit" className="btn btn-secondary" />
                </Form>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        department: state.department
    }
}

export default connect(mapStateToProps)(EmployeeForm)
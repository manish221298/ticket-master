import React from 'react'
import { Container, Form } from 'react-bootstrap'
// import { connect } from 'react-redux'
//import {startAddCustomers}  from '../../actions/customerAction'

class CustomerForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name: props.customer ? props.customer.name : '',
            email: props.customer ? props.customer.email : '',
            mobile: props.customer ? props.customer.mobile : ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
        }

        // const redirect = () => {
        //     return this.props.history.push('/customer')
        // }
        this.props.customer && (formData.id = this.props.customer._id)
        //console.log(formData)
        //this.props.dispatch(startAddCustomers(formData, redirect))
        this.props.handleEditSubmit(formData)
        // {this.props.customer && (formData.id = this.props.customer._id)}
        console.log(this.props)

        
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <Container>
           
                <h1 className="mt-5" >Add Customer</h1>
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

                    <Form.Label htmlFor="mobile">Phone:-</Form.Label>
                    <Form.Control 
                        type="mobile"
                        id="mobile"
                        name="mobile"
                        value={this.state.mobile}
                        onChange={this.handleChange}
                    /> <br/><br/>
                    <input type="submit" value="Submit" className="btn btn-secondary" />
                </Form>
            
            </Container>
        )
    }
}


//export default connect()(CustomerForm)

export default CustomerForm


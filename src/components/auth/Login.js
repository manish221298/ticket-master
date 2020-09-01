import React from 'react'
import { connect } from 'react-redux'
import { startLoginUser } from '../../actions/userAction'
import { Container, Form } from 'react-bootstrap'

class Login extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password: this.state.password
        }
        //console.log(formData)
        const redirect = () => {
            return this.props.history.push('/')
        }
        this.props.dispatch(startLoginUser(formData, redirect))
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div>
                <Container>
                <h1 className="text-center mt-5 text-secondary ">Login</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Label htmlFor="email"> email </Form.Label>
                    <Form.Control 
                        type="text"
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    /><br/><br/>
                    <Form.Label htmlFor="password"> password </Form.Label>
                    <Form.Control 
                        type="password"
                        id="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    /><br/><br/>
                    <input type="submit" value="Login" className="btn btn-secondary" />
                </Form>
            </Container>
            </div>
        )
    }
}

export default connect()(Login)
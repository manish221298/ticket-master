import React from 'react'
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
            <div>
                <h1>Add Customer</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:-</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    /> <br/><br/>

                    <label htmlFor="email">Email:-</label>
                    <input 
                        type="text"
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    /> <br/><br/>

                    <label htmlFor="mobile">Phone:-</label>
                    <input 
                        type="mobile"
                        id="mobile"
                        name="mobile"
                        value={this.state.mobile}
                        onChange={this.handleChange}
                    /> <br/><br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}


//export default connect()(CustomerForm)

export default CustomerForm


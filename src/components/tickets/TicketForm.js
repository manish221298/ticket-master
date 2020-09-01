import React from 'react' 
import { connect } from 'react-redux'
import { Container, Form } from 'react-bootstrap'

class TicketForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            code: props.ticket ? props.ticket.code : '',
            customer: props.ticket ? props.ticket.customer : '',
            department: '',
            employees: [],
            message: props.ticket ? props.ticket.message : '',
            priority: props.ticket ? props.ticket.priority : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
        code: this.state.code,
        customer: this.state.customer,
        department: this.state.department,
        employees: {_id:this.state.employees},
        message: this.state.message,
        priority: this.state.priority
        }
        this.props.ticket && (formData.id = this.props.ticket._id)
        this.props.handleTicketSubmit(formData)
        console.log(formData)
    }
    

    render(){
        return (
            <Container>
                {/* <h1>Add ticket</h1> */}
                <Form onSubmit={this.handleSubmit}>
                    <Form.Label htmlFor="code">Code:-</Form.Label>
                    <Form.Control 
                        type="text"
                        id="code"
                        name="code"
                        value={this.state.code}
                        onChange={this.handleChange}
                    /> <br/><br/>

                    <Form.Label htmlFor="customer">Customer:-</Form.Label>
                    <Form.Control as="select" onChange={this.handleChange} name="customer" >
                        <option>select</option>
                        {
                            this.props.customer.map(custom => {
                                return <option key={custom._id} value={custom._id} > {custom.name} </option>
                            })
                        }
                    </Form.Control>
                     <br/><br/>

                     <Form.Label htmlFor="department">Department:-</Form.Label>
                    <Form.Control as="select" onChange={this.handleChange} name="department" >
                        <option>select</option>
                        {
                            this.props.department.map(dept => {
                                return <option key={dept._id} value={dept._id} > {dept.name} </option>
                            })
                        }
                    </Form.Control>
                     <br/><br/>

                     <Form.Label htmlFor="employee">Employee:-</Form.Label>
                     {/* <select value={this.state.employees} */}
                      <Form.Control as="select"
                     name="employees"   
                      onChange={this.handleChange}>
                        <option value="select">select</option>
                        {
                            this.props.employee.map((ele)=>{
                                return( ele.department === this.state.department && 
                                
                                    <option key={ele._id} value={ele._id}>{ele.name}</option>
                          

                                )
                            })   
                        }
                    </Form.Control>
                    <br/><br/>

                    <Form.Label htmlFor="message">Message:-</Form.Label>
                    <Form.Control as="textarea" row="5"
                        type="textarea"
                        id="message"
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange}
                    /> <br/><br/>

                    <Form.Label><h3>Priority</h3></Form.Label><br/> 
                    <label>Medium</label>
                    <input type="radio"
                        value="High"
                        checked= {this.state.priority === "High"} 
                        onChange={this.handleChange} 
                        name="priority"/>
                    <br/>
                    <label>Medium</label>
                    <input type="radio"
                        value="Medium"
                        checked= {this.state.priority === "Medium"} 
                        onChange={this.handleChange} 
                        name="priority"/>
                    <br/>
                    <label>Low</label>
                    <input type="radio"
                        value="Low"
                        checked= {this.state.priority === "Low"} 
                        onChange={this.handleChange} 
                        name="priority"/>
                    <br/><br/>

                    <input type="submit" value="Submit" className="btn btn-secondary" />
                </Form>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        customer : state.customer,
        department: state.department,
        employee: state.employee
    }
}

export default connect(mapStateToProps)(TicketForm) 
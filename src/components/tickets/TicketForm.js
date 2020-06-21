import React from 'react' 
import { connect } from 'react-redux'

class TicketForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            code: '',
            customer: '',
            department: '',
            employees: [],
            message: '',
            priority: ''
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
        this.props.handleTicketSubmit(formData)
        console.log(formData)
    }
    

    render(){
        return (
            <div>
                {/* <h1>Add ticket</h1> */}
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="code">Code:-</label>
                    <input 
                        type="text"
                        id="code"
                        name="code"
                        value={this.state.code}
                        onChange={this.handleChange}
                    /> <br/><br/>

                    <label htmlFor="customer">Customer:-</label>
                    <select onChange={this.handleChange} name="customer" >
                        <option>select</option>
                        {
                            this.props.customer.map(custom => {
                                return <option key={custom._id} value={custom._id} > {custom.name} </option>
                            })
                        }
                    </select>
                     <br/><br/>

                     <label htmlFor="department">Department:-</label>
                    <select onChange={this.handleChange} name="department" >
                        <option>select</option>
                        {
                            this.props.department.map(dept => {
                                return <option key={dept._id} value={dept._id} > {dept.name} </option>
                            })
                        }
                    </select>
                     <br/><br/>

                     <label htmlFor="employee">Employee:-</label>
                     <select value={this.state.employees}
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
                    </select>
                    <br/><br/>

                    <label htmlFor="message">Message:-</label>
                    <textarea 
                        type="text"
                        id="message"
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange}
                    /> <br/><br/>

                    <label><h3>Priority</h3></label>
                    <label>High</label>
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

                    <input type="submit" value="Submit" />
                </form>
            </div>
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
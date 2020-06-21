import React from 'react'
import { connect } from 'react-redux'

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
            <div>
                {/* <h1>Add Employee</h1> */}   
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

                    <label htmlFor="mobile">Mobile:-</label>
                    <input 
                        type="mobile"
                        id="mobile"
                        name="mobile"
                        value={this.state.mobile}
                        onChange={this.handleChange}
                    /> <br/><br/>

                    <label htmlFor="department">Department:-</label>
                    <select  onChange={this.handleChange} name="department">
                    <option value="">select</option>
                        {this.props.department.map(depart=>{
                             return < option key={depart._id} value={depart._id}>{depart.name} </option>
                        })}
                    </select>
                    <br/><br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        department: state.department
    }
}

export default connect(mapStateToProps)(EmployeeForm)
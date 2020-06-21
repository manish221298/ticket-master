import React from 'react'
//import { connect } from 'react-redux'

// import { startAddDepartment } from '../../actions/departmentAction'

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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="name" 
                        value={this.state.name}
                        onChange={this.handleChange}
                    /><br/><br/>
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}
export default DepartmentForm
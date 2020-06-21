import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function EmployeeShow(props){
    // console.log(props)
    // console.log(props.employee)
    return (
        <div>
            <h1>Employee show</h1>
            {props.employee && (
                <div>
                    <h2> {props.employee.name} - {props.employee.email} </h2>
                    <Link to={`/employees/editemployee/${props.employee._id}`} >Edit</Link>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return{
        employee: state.employee.find(emp => emp._id === id)
        }
    }

export default connect(mapStateToProps)(EmployeeShow)
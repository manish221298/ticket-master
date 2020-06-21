import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function DepartmentShow(props) {
    console.log(props)
    //console.log(props.department)
    return (
        <div>
            <h1>Department Show</h1>
            {props.department && (
                <div>
                <h2>Name - {props.department.name} </h2>
                <Link to={`/departments/editdepartment/${props.department._id}`} >Edit</Link>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        department: state.department.find(dept => dept._id === id)
    }
}

export default connect(mapStateToProps)(DepartmentShow)
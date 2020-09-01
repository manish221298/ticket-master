import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Container, Table, Button } from 'react-bootstrap' 

import { startRemoveCustomer} from '../../actions/customerAction'
import swal from 'sweetalert'

function Customer(props){
    //console.log(props.customer)

    const handleRemove = (id) => {
        swal({
            title: "Are you sure ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Successfully Deleted", {	
                icon: "success",
              });
              props.dispatch(startRemoveCustomer(id)) 
            } 
          })
    }

        return(
            <Container>
                <h1 className="mt-5" >Customers - {props.customer.length} </h1>
                <Table striped responsive>
                <thead className="thead-dark" >
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                       {
                           props.customer.map(ele => {
                               return (
                                   <tr key={ele._id}>
                                       <td> {ele._id} </td>
                                       <td> {ele.name} </td>
                                       <td> {ele.email} </td>
                                       <td> {ele.mobile} </td>
                                       <td><Link to={`/customers/${ele._id}`}><Button className="btn btn-info   " >show</Button></Link></td>
                                       <td> <Button className="btn btn-danger" onClick={ () => handleRemove(ele._id)}>remove</Button> </td>
                                   </tr>
                               )
                           })
                       }
                </tbody>
            </Table>
            <Link to="/customers/addcustomer/customer">Add Customer</Link>
            </Container>
        )
}

const mapStateToProps = (state) => {
    return {
        customer: state.customer
    }
}

export default connect(mapStateToProps)(Customer)


// import React from 'react'
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

// import { startRemoveTicket } from '../../actions/ticketAction'

// function Ticket(props){
//     console.log(props)
//     const handleRemove = (id) => {
//              props.dispatch(startRemoveTicket(id))
//          }

//         //  const findCustomer =  (custom) => {
//         //             return props.customer.find(customer => customer._id === custom )
//         //          } 
            
//             const findDepartment = (ids) => {
//                 return props.department.find(dept => dept._id === ids)
//             }  
            
//             // const findEmployee = (ids) => {
//             //     return props.employee.find(dept => dept._id === ids)
//             // } 

//     return (
//         <div>
//             <h1>Tickets {props.ticket.length} </h1>

//             <table border="2" cellSpacing="0">
//                 <thead>
//                     <tr>
//                         <th>Code No</th>
//                         <th>Customer</th>
//                         <th>Department</th>
//                         <th>Employees</th>
//                         <th>Message</th>
//                         <th>Priority</th>
//                         <th>Actions</th>
//                         <th>Remove</th>
//                         <th>Complete</th>
//                     </tr>
//                 </thead>
//                 <tbody>

//                 {
//                         (Object.keys(props.ticket).length !== 0) && ( 
//                         props.ticket.map(tick => {
//                             const emp = tick.employee.find(em => (em._id))
//                                console.log(emp)
//                             return (
//                                 <tr key={tick._id} >
//                                     <td> {tick.code} </td> 
//                                     {/* <td> {tick.customer.name ? tick.customer.name : findCustomer(tick.customer).name} </td> */}
//                                     <td>
//                             {
//                                  props.customer.map(cust => tick.customer==cust._id && cust.name)
//                             }
                        
//                         </td>
//                                     <td> {tick.department.name ? tick.department.name : findDepartment(tick.department).name} </td>
//                                     {/* <td>  {tick.employee.name ? tick.employee.name : findEmployee(tick.employee).name}  </td> */}
//                                     <td>{(props.employee !== 0) && (props.employees.find(ele => ele._id === emp._id).name)}</td>
//                                     <td> {tick.message} </td>
//                                     <td> {tick.priority} </td>
//                                     <td> <button>show</button> </td>
//                                     <td><button onClick= { () => {
//                                         handleRemove(tick._id)
//                                     } } >remove</button></td>   
//                                 </tr>
//                             )
//                         })
//                         )
//                     }
//                 </tbody>
                
//             </table><br/>

//             <Link to="/AddTicket" >Add Ticket</Link>
//         </div>
//     )
// }

// const mapStateToProps = (state) => {
//     return {
//         ticket: state.ticket,
//         customer: state.customer,
//         department: state.department,
//         employee: state.employee,
//     } 
// }

// export default connect(mapStateToProps)(Ticket)



//******************************************************************************************** */


import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { startRemoveTicket } from '../../actions/ticketAction'

function Ticket(props){
    console.log(props)
    const handleRemove = (id) => {
             props.dispatch(startRemoveTicket(id))
         }

        //  const findCustomer =  (custom) => {
        //             return props.customer.find(customer => customer._id === custom )
        //          } 
            
            

    return (
        <div>
            <h1>Tickets {props.ticket.length} </h1>

            <table border="2" cellSpacing="0">
                <thead>
                    <tr>
                            <th>Code No</th>
                            <th>Customer</th>
                            <th>Department</th>
                            <th>Employees</th>
                            <th>Message</th>
                            <th>Priority</th>
                            <th>Actions</th>
                            <th>Remove</th>
                            <th>Complete</th>
                    </tr>
                </thead>
                <tbody>

                {
                        (Object.keys(props.ticket).length !== 0) && ( 
                        props.ticket.map(tick => {
                            const emp = tick.employees.find(em => (em._id))
                               console.log(emp)
                            return (
                                <tr key={tick._id} >
                                    <td> {tick.code} </td> 
                                    {/* <td> {tick.customer.name ? tick.customer.name : findCustomer(tick.customer).name} </td> */}
                                    <td>
                            {
                                 props.customer.map(cust => tick.customer == cust._id && cust.name)
                            }
                        
                        </td>
                        {
                            props.department.map(dep => tick.department === dep._id && dep.name)
                        }
                                    {/* <td>{(props.employee !== 0) && (props.employee.find(ele => ele._id === emp._id).name)}</td> */}
                                    <td> {tick.message} </td>
                                    <td> {tick.priority} </td>
                                    <td> <button>show</button> </td>
                                    <td><button onClick= { () => {
                                        handleRemove(tick._id)
                                    } } >remove</button></td>   
                                </tr>
                            )
                        })
                        )
                    }
                </tbody>
                
            </table><br/>

            <Link to="/AddTicket" >Add Ticket</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ticket: state.ticket,
        customer: state.customer,
        department: state.department,
        employee: state.employee,
    } 
}

export default connect(mapStateToProps)(Ticket)
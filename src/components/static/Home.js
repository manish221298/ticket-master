import React from 'react'
import image from './image.png'

function Home(props){
    return(
        <div>
             <h1 className="pt-2 text-center text-secondary" >Welcome to the Ticket Master app</h1>
            <div className="d-flex justify-content-center border border-light p-2">
            <img src={image} alt="ticket-mastaer-app"/>
            </div>
        </div>
    )
}

export default Home
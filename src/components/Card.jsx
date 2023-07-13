import React from 'react'
import { Link } from 'react-router-dom'
import { id } from 'react';


const Card = (props) => {
    // const{title,image,price}=props.item

    console.log(props)
    return (

        <>
           
            <div className="col">
                <div className="card">
                    <img src={props.item.image} className="card-img-top" alt={props.item.title} />
                    <div className="card-body">
                        <h5 className="card-title">${props.item.title}</h5>
                        <Link to={`/productdetails/${props.item.id}`} className='btn btn-primary'>View details</Link>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Card
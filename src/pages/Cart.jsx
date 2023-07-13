import React, { Fragment, useEffect } from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTrash } from 'react-icons/fa'

const Cart = () => {
    const [products, setProduct]=useState([])
    console.log(products)
    useEffect(()=>{
        const cartData=JSON.parse(localStorage.getItem('cartItems'))
        setProduct(cartData)
    },[])
    // remove item from cart function
    const removeCartHandler = id => {
        console.log(id)
        const cartItems=JSON.parse(localStorage.getItem('cartItems'))
        console.log(cartItems)
        // remove from the cart using filter
        const filterCart=cartItems.filter(item => item.id !== id)
        // update product after filter(change the state of products)
        setProduct(filterCart)
        // update the local storage data
        localStorage.setItem('cartItems',JSON.stringify(filterCart))
        toast.success('item is removed fromt the cart')
    }
    return (
        <>
            <ToastContainer theme='colored' position='top-center' />
            <div className="container">
                <div className="row d-flex justify-content-evenly my-4">
                    {products &&
                        products.length===0?
                        <h2 className='my-5 text-danger text-center' >
                            your Cart is Empty
                        </h2>
                        :
                        (
                            <>
                                <h2 className='text-center'>
                                    Your CART Items
                                </h2>
                                <div className="col-md-8 shadow">
                                    {products.map((item, i)=>(
                                        <Fragment key={i}>
                                            <hr />
                                            <div className="row d-flex align-items-center">

                                                <div className="col-2">
                                                    <img src={item.image} alt={item.title} width={'100'} />
                                                </div>
                                                <div className="col-3">
                                                    <span><strong>{item.title}</strong></span>
                                                </div>
                                                <div className="col-3 text-warning">
                                                    &{item.price}
                                                </div>
                                                <div className="col-3">
                                                    {item.quantity}
                                                </div>
                                                <div className="col-1">
                                                    <button className='btn btn-danger' onClick={()=>removeCartHandler(item.id)}>
                                                        <FaTrash />
                                                    </button>
                                                </div>
                                            </div>
                                        </Fragment>
                                    ))}
                                </div>
                                <div className="col-md-3">
                                    <div className="shadow p-2">
                                        <h5>Cart Summary</h5>
                                        <hr />
                                        <span><strong>Units:</strong>{products.reduce((total, item)=>total+Number(item.quantity), 0)}Units</span>
                                        <br /> <span><strong>Total:</strong>
                                            ${products.reduce((total, item) => total + (item.quantity*item.price),0)}
                                        </span>
                                        <hr />
                                        <button className='btn btn-warning'>Check out</button>

                                    </div>
                                </div>
                            </>
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default Cart
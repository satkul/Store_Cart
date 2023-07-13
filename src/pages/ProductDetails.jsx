import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 


const ProductDetails = () => {
    const params=useParams()
    const[product,setProduct]=useState({})
     useEffect(()=>{
        const id=params.product_id
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>setProduct(res.data))
        .catch(err=>console.log(err))

     },[])
    //  handling add to cart function
    const addToCart=()=>
    {
        const cartItems=JSON.parse(localStorage.getItem('cartItems')) || []
        const productItem=
        {
            id:product.id,
            title:product.title,
            price:product.price,
            image:product.image,
            category:product.category,
            rating:product.rating,
            quantity:1
        }
        // check if the irem is present in the cart or not
        const existingItem=cartItems.find((item)=>item.id===product.id)
        if(existingItem)
        {
            toast.error('product already in the cart')
        }
        else
        {
            cartItems.push(productItem)
            localStorage.setItem('cartItems',JSON.stringify(cartItems))
            toast.success(`${productItem.title} is added to cart`)
        }
    }
  return (
    <>
    <ToastContainer theme='colored' position='top-center'/>
    <div className="container my-5">
        <div className="row d-flex justify-content-evenly shadow">
            <div className="col-md-5">
                <img src={product.image} alt={product.title} width={'500'} />
            </div>
            <div className="col-md-6">
                <h2>{product.title}</h2>
                <h2>${product.price}</h2>
                <h3>Category:${product.category}</h3>
                <p>{product.description}</p>
                <div className="my-2">
                    <button className='btn btn-warning' onClick={addToCart}>Add to Cart</button>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default ProductDetails
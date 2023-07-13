import React, { useState } from 'react'

const IncrementDecrement = () => {
    const [data,setData]=useState(1)
    // const incrementFunc=()=>
    // {
    //     setData(data+1)
    // }
  return (
    <>
    <h2 className='text-success'>{data}</h2>
    {/* <button className='btn btn-primary' onClick={incrementFunc}>Increment</button> */}
    {
        data<100 &&
        <button className='btn btn-primary' onClick={()=>setData(data+1)}>Increment</button>
 
    }
       &nbsp;&nbsp;&nbsp;

    
    {
        data>1 &&
        
    <button className='btn btn-danger' onClick={()=>setData(data-1)}>Decrement</button>

    }
    

    </>
  )
}

export default IncrementDecrement
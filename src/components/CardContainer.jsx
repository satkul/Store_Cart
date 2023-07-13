import React, { useState, useEffect } from 'react'
import Card from './Card'
import axios from 'axios'
import { ColorRing } from 'react-loader-spinner'

const CardContainer = () => {
  const [products, setProducts] = useState([])
  const [loading,setLoading]=useState(true)


  useEffect(() => {
    const fetchProduct = async () => {

      try {
        const response = await axios.get(`https://fakestoreapi.com/products`)

        setProducts(response.data)
        setLoading(false)

      }
      catch (err) {
        console.log(err)
      }
    }

    setTimeout(()=>{
      fetchProduct()
     
    },2000)
  }, [])

  return (
    <>
      <div classNameName="container-fluid w-100">
        <div className="row row-cols-1 row-cols-md-4 g-4 ">
          {loading ? (
            <div style={{ height: '50vh' }} className='d-flex justify-content-center align-items-center'>
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
              />
            </div>
          ) :
            (
              products.slice(0, 8).map((product, i) => (
                <Card key={i} item={product} />

              ))
            )}

        </div>
      </div>
    </>
  )
}

export default CardContainer
import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Layouts from './pages/Layouts'
import HomePages from './pages/HomePages'
import Login from './pages/Login'
import ProductDetails from './pages/ProductDetails'
import Product from './pages/Product'
import Cart from './pages/Cart'

const MyRoutes = () => {
  return (
    <Router>
    <Routes>
        <Route path='' element={<Layouts/>}>
           <Route index element={<HomePages/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/productdetails/:product_id' element={<ProductDetails/>}/>
           <Route path='/products' element={<Product/>}/>
           <Route path='/cart' element={<Cart/>}/>

        </Route>
    </Routes>
    </Router>
  )
}

export default MyRoutes
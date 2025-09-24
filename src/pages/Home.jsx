import React from 'react'
import ProductList from '../components/ProductList'
import CartDrawer from '../components/CartDrawer'

export default function Home(){
  return (
    <div className="row">
      <div className="col-lg-8">
        <h3>Products</h3>
        <ProductList />
      </div>
      <div className="col-lg-4">
        <CartDrawer />
      </div>
    </div>
  )
}

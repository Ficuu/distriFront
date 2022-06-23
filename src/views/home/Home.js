import React from 'react'
import Product from '../../components/Product/Product'
import Header from '../../components/Header/Header'
import ProductIcons from '../../components/Product/ProductIcons'
// import Portada from '../../components/Portada/Portada'


const Home = () => {
  return (
    <>
        <Header />
        <Product />
        <ProductIcons />
    </>
  )
}

export default Home
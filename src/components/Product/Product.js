import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Product.css'

import { readProduct } from '../../functions'


const Product = () => {
  const [ product, setProduct ] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        const result = await readProduct()
        setProduct(result)
      }
      fetchData()
    }, [])

  return (
    <div class="container mb-5">
      <div class="row">
        {product.map(item => {
          return(
            <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-xs-12 col-sm-12 mt-4 text-center' key={item._id}>
              <Link to={`/detail/${item._id}`} class="card bg-image hover-zoom text-dark">
                <img src={item.img} class="card-img-top imgBlock mx-auto d-block" alt="Hollywood Sign on The Hill"/>
                <div class="card-body">
                  <h6 class="card-title textEllipsis">{item.title}</h6>
                  <p class="card-text">Tamaño: {item.volNeto}</p>
                  
                </div>
              </Link>
            </div>
            )
          })
        }
      </div>
      
    </div>
  )
}

export default Product


/*
 <div className='container-fluid'>
     <div className='row text-center'>
     {product.map(item => {
        return(
          
            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-xs-12 col-sm-12 mt-4' key={item._id}>
              <div className="marketing mt-5 ">
                <img className="bd-placeholder-img rounded-circle" src={item.img} width="140" height="140" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                <h2>{item?.title}</h2>
                <p>{item?.description}</p>
                <p>{`$ ${item?.price}`}</p>
                <p><Link className="btn btn-secondary " to={''}>Ver detalles</Link></p>
              </div>
            </div>
          


*/
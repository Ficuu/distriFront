import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { readProductById } from '../../api'

const ProductView = () => {
  const [ product, setProduct ] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchDataById = async() => {
      const result = await readProductById(id)
      setProduct({...result.data, id: id})
    }
    fetchDataById()
  }, [id])

  return (
    <div className='container mt-5 mb-5'>
        <h2 className='mb-4'>Detalle de producto</h2>
        <div className='row'>
          <div className='col-xxl-1 col-xl-2 col-lg-2 '>
            <img src={product.img} alt={product.title} className="w-50 me-1 border border-2 rounded-6 mb-2" />
            <img src={product.img} alt={product.title} className="w-50 me-1 border border-2 rounded-6 mb-2" />
            <img src={product.img} alt={product.title} className="w-50 me-1 border border-2 rounded-6 mb-2" />
            <img src={product.img} alt={product.title} className="w-50 me-1 border border-2 rounded-6 mb-2" />
          </div>
          <div className='col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-xs-12 col-sm-12'>
            <img src={product.img} alt={product.title} className="mx-auto d-block w-75" />
          </div>
          <div className='col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-xs-12 col-sm-12'>
            <h2>{product.title}</h2>
            <h3 className='mt-2'>${product.price}</h3>
            <p>Volumen de la unidad: <br />{product.volNeto}</p>
            <p>Unidades por bulto: 12</p>
            <p>Codigo interno: 223322</p>
            <p>En stock: Si</p>
          </div>
        </div>
      </div>
  )
}

export default ProductView
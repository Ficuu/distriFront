import React, { useEffect, useState } from 'react'
import { readProduct, createProduct, updateProduct, deleteProduct } from '../../functions'

const FormProduct = () => {

    const [ getProduct, setGetProduct ] = useState({
        title: '',
        business: '',
        img: '',
        price: '',
        description: '',
        volNeto: '',
        additional: {
            line: '',
            format: '',
            typeOfTreatment: '',
        }
    })
    const [ product, setProduct ] = useState([])
    const [ productId, setProductId ] = useState(0)
  
    useEffect(() => {
        let currentProduct = productId === 0 
            ? product.find(values => values._id === productId) 
            : {
                title: '',
                business: '',
                img: '',
                price: '',
                description: '',
                volNeto: '',
                additional: {
                    line: '',
                    format: '',
                    typeOfTreatment: '',
            }
        }
        setGetProduct(currentProduct)  
    }, [productId, product])

    useEffect( () => {
        const fetchData = async () => {
            const result = await readProduct()
            setProduct(result)
        }
        fetchData()
    }, [productId])
    
    const clear = () => {
        setProductId(0)
        setGetProduct({
            title: '',
            business: '',
            img: '',
            price: '',
            description: '',
            volNeto: '',
            additional: {
                line: '',
                format: '',
                typeOfTreatment: '',
            }
        })
    }

    useEffect( () => {
        const clearField = e => {
            if(e.keyCode === 27) {
                clear()
            }
        }
        window.addEventListener('keydown', clearField)
        return () => window.removeEventListener('keydown', clearField)
    }, [])

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        if(productId === 0) {
            const result = await createProduct(getProduct)
            setProduct([ ...product, result ])
            clear()
        } else {
            await updateProduct(productId, getProduct)
            clear()
        }
    }

    const removeProduct = async (id) => {
        await deleteProduct(id)
        const result = await readProduct()
        setProduct(result)
    }

return (
    <div className='container-fluid mt-4'>
        <div className='row justify-content-center'>
            <div className='col-sm-12 col-md-8 col-lg-6 col-xl-6 col-xxl-6'>
            
            </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col-3">#</th>
              <th scope="col-3">Title</th>
              <th scope="col-3">business</th>
              <th scope="col-3">Price</th>
              <th scope="col-3">Description</th>
              <th scope="col-3">Volumen</th>
              <th scope="col-3">Image</th>
              <th scope="col-3">Actions</th>
            </tr>
          </thead>
           <tbody>
            {
              product.map((items, pos) => {
                return(
                  <>
                    <tr key={items._id}>
                      <th scope="row">{pos + 1}</th>
                      <td>{items.title}</td>
                      <td>{items.business}</td>
                      <td>{items.price}</td>
                      <td>{items.description}</td>
                      <td>{items.volNeto}</td>
                      <td><img src={items.img} alt='img' style={{ width: "30px"}} /></td>
                      <td>
                        <button type="button" className="btn btn-link me-2 text-dark" onClick= {() => setProductId(items._id)}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"></path>
                          </svg>
                        </button>
                        <button type="button" className="btn btn-link me-2 text-dark" onClick={() => removeProduct(items._id)}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"></path>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  </>
                )
              })
            }
        </tbody>
      </table>
    </div>
  )
}

export default FormProduct
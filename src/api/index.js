import axios from 'axios'
const url = 'http://localhost:3001/product'

export const readProduct = () => axios.get(url)
export const readProductById = id => axios.get(`${url}/${id}`)
export const createProduct = newProduct => axios.post(url, newProduct)
export const updateProduct = (id, updateProduct) => axios.put(`${url}/${id}`, updateProduct)
export const deleteProduct = id => axios.delete(`${url}/${id}`)
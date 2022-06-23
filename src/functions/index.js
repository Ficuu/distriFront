import * as api from '../api'
import Product from '../components/Product/Product'

export const readProduct = async() => {
    try {
        const { data } = await api.readProduct()
        return data
    } catch (err) {
        console.log(err)
    }
}

export const readProductById = async (id) => {
    try {
        const { data } = await api.readProduct(id, Product)
        return data
    } catch (err) {
        console.log(err)
    }
}

export const createProduct = async(Product) => {
    try {
        const { data } = await api.createProduct(Product)
        return data
    } catch (err) {
        console.log(err)
    }
}

export const updateProduct = async(id, Product) => {
    try {
        const { data } = await api.updateProduct(id, Product)
        return data
    } catch (err) {
        console.log(err)
    }
}

export const deleteProduct = async (id) => {
    try {
        await api.deleteProduct(id)
    } catch (err) {
        console.log(err)
    }
}
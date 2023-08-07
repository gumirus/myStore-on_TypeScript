import { useEffect, useState } from "react"
import { IProduct } from "../models"
import axios, { AxiosError } from "axios"

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function addProduct(product: IProduct) {
    setProducts(prev => [...prev, product])
  }

  async function fetchProducts() {
    try {
      setError('')
      setLoading(true)
      const responce = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=6')
      setProducts(responce.data)
      setLoading(false)
    } catch (e: unknown) {
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }

  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return { products, loading, error, addProduct }
} 
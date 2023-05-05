import { useContext } from 'react'
import { FilterContext } from '../context/filter'
import { Product } from '../interfaces/product'

export const useFilter = () => {
  const { filters, setFilters } = useContext(FilterContext)

  const filterProducts = (products: Product[]) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }
  return { filters, setFilters, filterProducts }
}

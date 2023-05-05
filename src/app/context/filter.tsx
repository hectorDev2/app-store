'use client'
import { ReactNode, createContext, useState } from 'react'

export const FilterContext = createContext({
  setFilters: (filter: any) => {},
  filters: {
    category: '',
    minPrice: 0
  }
})

export const useFilterReducer = () => {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 5
  })

  return { filters, setFilters }
}

export function ProviderFilter ({ children }: { children: ReactNode }) {
  const { filters, setFilters } = useFilterReducer()
  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  )
}

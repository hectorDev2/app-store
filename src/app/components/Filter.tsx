'use client'
import React, { useId } from 'react'
import { useFilter } from '../hooks/useFilter'
interface FilterInterface {
  setFilters: (filter: any) => void
  filters: {
    category: string
    minPrice: number
  }
}

export const Filter = () => {
  const { filters, setFilters } = useFilter()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangePriceMin = (e: any) => {
    let target = e.target as HTMLInputElement
    setFilters((prevFilters: FilterInterface) => ({
      ...prevFilters,
      minPrice: Number(target.value)
    }))
  }

  const handleChangeCategory = (event: any) => {
    setFilters((prevState: FilterInterface) => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <div className='d-flex justify-content-center gap-4'>
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleChangePriceMin}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </div>
  )
}

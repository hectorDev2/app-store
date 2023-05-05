'use client'
import React from 'react'
import Image from 'next/image'
import { useCart } from '../hooks/useCart'
import { Product, ProductsInterface } from '../interfaces/product'

import './style.css'

export interface InterfaceUseCart {
  cart: any
  addToCart: (product: Product) => void
}

export const Products = ({ products }: ProductsInterface) => {
  const { cart, addToCart } = useCart()

  return (
    <div className='container-products'>
      {products?.map(product => {
        return (
          <div className='productCard' key={product.id}>
            <Image src={product.images[0]} alt={''} width={250} height={200} />
            <h3>
              <strong>{product.title}</strong> - {product.price}
            </h3>
            <button onClick={() => addToCart(product)}>add to cart</button>
          </div>
        )
      })}
    </div>
  )
}

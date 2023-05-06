'use client'
import React from 'react'
import Image from 'next/image'
import { useCart } from '../hooks/useCart'
import { Product, ProductsInterface } from '../interfaces/product'

import './style.css'
import Link from 'next/link'
import { checkProductInCart } from '@/utils/funcions'

export interface InterfaceUseCart {
  cart: any
  addToCart: (product: Product) => void
}

export const Products = ({ products }: ProductsInterface) => {
  const { cart, addToCart, deleteToCart } = useCart()

  return (
    <div className='container-products'>
      {products?.map(product => {
        const isProductInCart = checkProductInCart(product, cart)
        return (
          <div key={product.id} className='productCard'>
            <Link href={`product/${product.id}`}>
              <Image
                src={product.images[0]}
                alt={''}
                width={250}
                height={200}
              />
            </Link>
            <h4>
              <strong>{product.title}</strong>
            </h4>
            <h5>$ {product.price}</h5>
            {!isProductInCart ? (
              <button onClick={() => addToCart(product)}>add to cart</button>
            ) : (
              <button onClick={() => deleteToCart(product)}>
                delete to cart
              </button>
            )}
          </div>
        )
      })}
    </div>
  )
}

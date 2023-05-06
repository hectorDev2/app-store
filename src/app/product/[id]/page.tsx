'use client'
import '../style.css'
import { useCart } from '@/app/hooks/useCart'
import React from 'react'
import { products } from '../../../mock/products.json'
import { ProductItem } from './Product'

export default function Page ({ params, searchParams }: any) {
  const { checkProductInCart } = useCart()
  const product = products.find(item => item.id == params.id)

  if (product) {
    const check = checkProductInCart(product)
    return <ProductItem product={product} check={check} />
  } else {
    return <h2>no existe el producto 🥲 </h2>
  }
}

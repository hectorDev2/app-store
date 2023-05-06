import React from 'react'
import { Product } from '../../interfaces/product'
import Image from 'next/image'
import { useCart } from '@/app/hooks/useCart'
export const ProductItem = ({
  product,
  check
}: {
  product: Product
  check: boolean
}) => {
  console.log(product, 'product')

  const { addToCart, deleteToCart, checkProductInCart } = useCart()

  return (
    <div className='container'>
      <div className='containerProduct'>
        <div key={product?.id} className='productCard'>
          <Image src={product?.images[0]} alt={''} width={250} height={200} />

          <h5>$ {product.price}</h5>
          {!check ? (
            <button onClick={() => addToCart(product)}>add to cart</button>
          ) : (
            <button onClick={() => deleteToCart(product)}>
              delete to cart
            </button>
          )}
        </div>
        <div className='infoCard'>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <div className='labels'>
            <button style={{ background: '#ffbe0b', marginRight: '10px' }}>
              <strong>stock</strong>
            </button>
            <strong>
              <label htmlFor=''>{product.stock}</label>
            </strong>
          </div>
          <div className='labels'>
            <button style={{ background: '#e63946', marginRight: '10px' }}>
              <strong>Category</strong>
            </button>
            <strong>
              <label htmlFor=''>{product.category}</label>
            </strong>
          </div>
          <div className='labels'>
            <button style={{ background: '#a8dadc', marginRight: '10px' }}>
              <strong>Rating</strong>
            </button>
            <strong>
              <label htmlFor=''>{product.rating}</label>
            </strong>
          </div>
        </div>
      </div>
    </div>
  )
}

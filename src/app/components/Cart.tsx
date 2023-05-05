import React, { useId } from 'react'
import { useCart } from '../hooks/useCart'
import { CartIcon, ClearCartIcon } from '@/utils/Icons'
import { CartItem } from './CartItem'
import { Product } from '../interfaces/product'

export const Cart = () => {
  const cartCheckboxId = useId()
  const { cart, clear, addToCart } = useCart()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {cart.map((product: Product) => (
            <CartItem
              key={product?.id}
              addToCart={async () => addToCart(product)}
              {...product}
            />
          ))}
        </ul>

        <button onClick={clear}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}

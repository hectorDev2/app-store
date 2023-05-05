import Image from 'next/image'
import React from 'react'

export const CartItem = ({
  addToCart,
  thumbnail,
  title,
  price,
  quantity
}: any) => {
  return (
    <li>
      <Image src={thumbnail} width={100} height={100} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

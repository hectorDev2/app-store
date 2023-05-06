'use client'
import { ReactNode, createContext, useReducer } from 'react'
import { Product } from '../interfaces/product'
export const CartContext = createContext({
  cart: [],
  addToCart: (product: Product) => {},
  clear: () => {},
  deleteToCart: (product: Product) => {},
  checkProductInCart: (product: Product) => false
})

type ChildrenProps = {
  children: ReactNode
}

const initialState: Product[] = []

export const CART_ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

interface Action {
  type: string
  payload?: Product
}
const cartReducer = (state: any, action: Action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_TO_CART:
      const existInCart = state.find(
        (product: Product) => product.id == action.payload?.id
      )
      if (existInCart) return state
      return [...state, action.payload]

    case CART_ACTIONS.CLEAR_CART:
      return []

    case CART_ACTIONS.REMOVE_FROM_CART:
      const stateNew = state.filter(
        (product: Product) => product.id !== action.payload?.id
      )
      return stateNew
    default:
      break
  }
}

export function UseCartReducer () {
  const [cart, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (product: Product) =>
    dispatch({
      type: CART_ACTIONS.ADD_TO_CART,
      payload: product
    })

  const clear = () => {
    dispatch({
      type: CART_ACTIONS.CLEAR_CART
    })
  }

  const deleteToCart = (product: Product) =>
    dispatch({
      type: CART_ACTIONS.REMOVE_FROM_CART,
      payload: product
    })

  return { cart, addToCart, deleteToCart, clear }
}

export function CartProvider ({ children }: ChildrenProps) {
  const { cart, clear, deleteToCart, addToCart } = UseCartReducer()

  const checkProductInCart = (product: Product) => {
    return cart.some((item: Product) => item.id === product.id)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clear,
        deleteToCart,
        checkProductInCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

import { Product } from '@/app/interfaces/product'

export const checkProductInCart = (product: Product, cart: any[]) => {
  return cart.some((item: Product) => item.id === product.id)
}

'use client'
import { Header } from './components/Header'
import { Products } from './components/Products'
import styles from './page.module.css'
import { products } from '../mock/products.json'
import { useFilter } from './hooks/useFilter'

export default function Home () {
  const { filterProducts, filters } = useFilter()

  return (
    <main className={styles.main}>
      <Header />
      <Products
        products={filterProducts(products)}
        total={0}
        skip={0}
        limit={0}
      />
    </main>
  )
}

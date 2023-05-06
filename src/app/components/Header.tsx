'use client'
import React from 'react'
import { Filter } from './Filter'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export const Header = () => {
  const path = usePathname()

  return (
    <div style={{ width: '100%', textAlign: 'center', padding: '2em' }}>
      <Link href={'/'}>
        <h1>React Shop 🛒</h1>
      </Link>
      {path == '/' && <Filter />}
    </div>
  )
}

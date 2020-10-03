import React from 'react'

import Search, { SearchProps } from '../search'
import Theme from '../theme'
import Carts from '../carts'

import './header.css'

const Header = ({ handleUpdateQuery, query }: SearchProps) => {
  return (
    <div className="header">
      <Search handleUpdateQuery={handleUpdateQuery} query={query} />
      <Theme />
      <Carts />
    </div>
  )
}

export default Header

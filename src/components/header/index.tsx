import React from 'react'

import Search from '../search'
import Theme from '../theme'
import Carts from '../carts'

import './header.css'

const Header =() =>{ 
    return (
        <div className = "header">
            <Search />
            <Theme />
            <Carts />
        </div>
    )
}

export default Header;

import React,{useContext} from 'react'
import {useSelector} from 'react-redux'
import { Button, Icon } from 'semantic-ui-react'
import {Link}  from 'react-router-dom'

import { AppState } from '../../types'
import {ThemeContext} from '../../context'

export default function Carts() {
const countriesInCart = useSelector((state: AppState) => state.countries.inCart)
const {theme} =useContext(ThemeContext)

    return (
        <>
        <Link to ="/cart" style={{background:theme.button, color:theme.button}}>
        <Button basic >
            <Button.Content visible >
                {countriesInCart.length}<Icon name='shop' />
            </Button.Content>
        </Button>
        </Link>
        </>
    )

}

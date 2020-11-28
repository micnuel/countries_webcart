import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, List, Image, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import { removeCountry } from '../../redux/actions'
import { AppState } from '../../types'

import './checkout.css'

function CheckoutCart() {
  //const { theme } = useContext(ThemeContext)
  const dispatch = useDispatch()
  const countriesInCart = useSelector(
    (state: AppState) => state.countries.inCart
  )

  return (
    <>
      <h4> List of Countries inside Cart</h4>
      {countriesInCart.length <= 0 && (
        <div>
          <h4>No Country in cart</h4>
        </div>
      )}
      <Link to="/">
        {' '}
        <Icon name="angle double left" size="huge" textAlign="center" />
      </Link>
      {countriesInCart.map((p) => (
        <List divided key={p.id} className="content">
          <List.Item className="content__items">
            <List.Content floated="right">
              <Button onClick={() => dispatch(removeCountry(p))}>Remove</Button>
            </List.Content>
            <Image avatar src={`${p.flag}`} />
            <List.Content>{p.name}</List.Content>
          </List.Item>
        </List>
      ))}
    </>
  )
}

export default CheckoutCart

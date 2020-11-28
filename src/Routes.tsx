import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/home'
import CountryPage from './components/country'
import CheckoutCart from './components/checkout'

const Routes = () => (
  <Switch>
    <Route
      exact
      path='/'
      component={ Home }
    />
    <Route
      exact
      path='/country/:id'
      component={ CountryPage }
    />
    <Route
      exact
      path='/cart'
      component={ CheckoutCart }
    />

  </Switch>
)

export default Routes



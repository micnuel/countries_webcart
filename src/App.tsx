import React from 'react'

import Routes from './Routes'
import {ThemeProvider}  from './context/'
export default function App() {
  return (
    <>
    <ThemeProvider>
        <Routes />
    </ThemeProvider>
      
    </>
  )
}

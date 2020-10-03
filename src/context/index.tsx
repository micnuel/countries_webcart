import React, { useState } from 'react'

import themes from './__contextVariables'

const contextTheme = themes

export type ContextType = {
  children: React.ReactNode
}

export const ThemeContext = React.createContext({
  theme: contextTheme.light,
  switchTheme: () => {},
})

export const ThemeProvider = ({ children }: ContextType) => {
  const [theme, setTheme] = useState(contextTheme.light)
  const switchTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === contextTheme.light) {
        return contextTheme.dark
      }
      if (prevTheme === contextTheme.dark) {
        return contextTheme.light
      } else return contextTheme.light
    })
  }

  const value = { theme, switchTheme }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

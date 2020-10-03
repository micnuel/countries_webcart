import React, { useContext } from 'react'
import { Button } from 'semantic-ui-react'

import { ThemeContext } from '../../context'

export default function Theme() {
  const { theme, switchTheme } = useContext(ThemeContext)
  return (
    <div>
      <Button.Group>
        <Button
          style={{ background: theme.button, color: theme.button }}
          onClick={switchTheme}
        />
        <Button.Or />
        <Button onClick={switchTheme} />
      </Button.Group>
    </div>
  )
}

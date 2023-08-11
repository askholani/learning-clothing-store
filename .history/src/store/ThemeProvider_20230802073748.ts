// theme-provider.tsx (Contoh pembuatan ThemeProvider)
import React, { useState } from 'react'
import ThemeContext, { ThemeContextType } from './theme-context'

const ThemeProvider: React.FC = (props) => {
  const [theme, setTheme] = useState<string>('light')

  // Menyediakan context value dengan tipe yang sesuai
  const themeContextValue: ThemeContextType = {
    theme,
    setTheme,
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

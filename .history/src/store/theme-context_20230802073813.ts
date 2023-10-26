// theme-context.tsx (Contoh definisi ThemeContext)
import { createContext, useContext } from 'react'

// Definisikan tipe untuk data context
export type ThemeContextType = {
  theme: string
  setTheme: (theme: string) => void
}

// Buat context dengan nilai awal (default) sesuai dengan tipe yang telah didefinisikan
const ThemeContext = createContext<ThemeContextType | null>(null)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export default ThemeContext

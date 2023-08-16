import { useState, useEffect } from 'react'

function useLocalStorage(
  key: string = 'checkout',
  initialValue: any,
  deleteLS: string = 'default',
) {
  // State untuk menyimpan nilai
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  })

  const setValue = (value: any) => {
    setStoredValue(value)
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  // Listen perubahan nilai state, sync dengan localStorage
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue))
  }, [key, storedValue])

  return [storedValue, setValue]
}

export { useLocalStorage }

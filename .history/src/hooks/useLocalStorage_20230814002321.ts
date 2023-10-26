import { useState, useEffect } from 'react'

function useLocalStorage(
  key: string = 'checkout',
  initialValue: any,
  deleteLS: string = 'default',
) {
  // State untuk menyimpan nilai
  const [storedValue, setStoredValue] = useState(() => {
    // Dapatkan nilai awal dari localStorage
    const item = localStorage.getItem(key)
    // Kembalikan nilai awal atau initialValue
    return item ? JSON.parse(item) : initialValue
  })

  // Fungsi untuk memperbarui nilai di localStorage
  const setValue = (value: any) => {
    // Simpan nilai ke state
    setStoredValue(value)
    // Juga simpan ke localStorage
    localStorage.setItem(key, JSON.stringify(value))
  }

  // Listen perubahan nilai state, sync dengan localStorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue))
  }, [key, storedValue])

  if (deleteLS !== 'default') {
    localStorage.removeItem(deleteLS)
  }

  return [storedValue, setValue]
}

export { useLocalStorage }

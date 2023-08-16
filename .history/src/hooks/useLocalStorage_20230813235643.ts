import { useState, useEffect } from 'react'

function useLocalStorage(
  key: string = 'checkout',
  value: any,
  deleteLS: string = 'default',
) {
  const data = window.localStorage.getItem(key)
  if (data) {
    return JSON.parse(data)
  }

  if (value) {
    window.localStorage.removeItem(key)
    window.localStorage.setItem(key, JSON.stringify(value))
    return 'success updated'
  }

  if (deleteLS) {
    window.localStorage.removeItem(deleteLS)
    return 'success deleted'
  }

  // State untuk menyimpan nilai
  //   const [storedValue, setStoredValue] = useState(() => {
  //     // Dapatkan nilai awal dari localStorage
  //     const item = window.localStorage.getItem(key)
  //     // Kembalikan nilai awal atau initialValue
  //     return item ? JSON.parse(item) : initialValue
  //   })

  // Fungsi untuk memperbarui nilai di localStorage
  //   const setValue = (value: any) => {
  //     // Simpan nilai ke state
  //     setStoredValue(value)
  //     // Juga simpan ke localStorage
  //     window.localStorage.setItem(key, JSON.stringify(value))
  //   }

  // Listen perubahan nilai state, sync dengan localStorage
  //   useEffect(() => {
  //     window.localStorage.setItem(key, JSON.stringify(storedValue))
  //   }, [key, storedValue])

  //   if (deleteLS !== 'default') {
  //     window.localStorage.removeItem(deleteLS)
  //   }

  //   return [storedValue, setValue]
}

export { useLocalStorage }

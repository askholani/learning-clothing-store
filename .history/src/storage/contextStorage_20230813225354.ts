'use client'

export function retrieveLocalStorage(nameItem: string, value: string) {
  const save = localStorage.setItem(nameItem, value)
}

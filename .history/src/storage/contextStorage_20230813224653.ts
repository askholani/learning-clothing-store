'use client'

export async function retrieveLocalStorage(nameItem: string, value: string) {
  const save = localStorage.setItem(nameItem, value)
}

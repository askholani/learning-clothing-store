'use client'
import { SessionProvider } from 'next-auth/react'

export default function SessionProvders({
  children,
}: {
  children: React.ReactNode
}) {
  return <SessionProvders>{children}</SessionProvders>
}

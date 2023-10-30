import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '../../../../models/allModels'

import EmailProvider from 'next-auth/providers/email'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    EmailProvider({
      server: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      maxAge: 5 * 60,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith('/')) return `${baseUrl}${url}`
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
    async session({ session, user, token }) {
      // session.accessToken = token.accessToken
      // session.user.id = token.id
      // return session
      const res = await session
      return res
    },
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
  },

  session: {
    strategy: 'jwt',
    maxAge: 6 * 60 * 60,
    updateAge: 0,
  },
  jwt: {
    maxAge: 6 * 60 * 60,
  },
  adapter: PrismaAdapter(prisma),
})

export { handler as GET, handler as POST }

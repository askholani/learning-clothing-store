import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '../../../../models/allModels'
import NextAuth from 'next-auth/next'

import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

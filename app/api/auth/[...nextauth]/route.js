import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from '@/lib/mongodb'
import User from '@/lib/models/User'
import dbConnect from '@/lib/dbConnect'
import bcrypt from 'bcryptjs'

const handler = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'email@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        await dbConnect()

        // Find user by email
        const user = await User.findOne({ email: credentials.email })
        if (!user) {
          throw new Error('No user found with the email')
        }

        // Compare passwords
        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        )
        if (!isValid) {
          throw new Error('Incorrect password')
        }

        // Return user object for the session
        return { id: user._id.toString(), email: user.email }
      },
    }),
  ],
  pages: {
    signIn: '/login', // custom login page
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id
      }
      return session
    },
    async redirect({ url, baseUrl }) {
      return baseUrl + '/admin'
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // ensure this is set in your env variables
})

export { handler as GET, handler as POST }

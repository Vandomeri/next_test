import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";

export const NextAuthConfig = {
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: '/login'
    },
    providers: [CredentialsProvider({
        credentials: {
            email: {},
            password: {}
        },
        async authorize(credentials, req) {

            const prisma = new PrismaClient()

            const response = await prisma.users.findFirst({
                where: {
                    email: credentials.email
                }
            })

            const passCorrect = await compare(
                credentials.password,
                response.password
            )


            if (passCorrect) {
                return {
                    id: response.id,
                    email: response.email,
                    role: response.role
                }

            }

            return null

        }
    })],
    callbacks: {
        async session({ session, token, user }) {
            session.user = {
                id: token.id,
                email: token.email,
                role: token.role
            }

            return session
        },
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role
                token.id = user.id
            }


            return token
        }

    }
}
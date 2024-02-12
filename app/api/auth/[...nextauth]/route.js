import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { PrismaClient } from "@prisma/client";

const handler = NextAuth({
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

            console.log(passCorrect);

            if (passCorrect) {
                return {
                    id: response.id,
                    email: response.email
                }
            }

            console.log({ response });

            console.log({ credentials });
            return null

        }
    })]
})

export { handler as GET, handler as POST }
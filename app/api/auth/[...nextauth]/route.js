import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextAuthConfig } from "@/configs/NextAuthConfig";
const handler = NextAuth(NextAuthConfig)

export { handler as GET, handler as POST }
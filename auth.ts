import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./db/prisma";
import { compareSync } from "bcrypt-ts-edge";
import type { NextAuthConfig } from "next-auth";

export const config = {
	pages: {
		signIn: "/sign-in",
		error: "/sign-in",
	},
	session: {
		strategy: "jwt",
		maxAge: 30 * 24 * 60 * 60, // 30 days
	},
	adapter: PrismaAdapter(prisma),
	providers: [
		CredentialsProvider({
			credentials: {
				email: { type: "email" },
				password: { type: "password" },
			},
			async authorize(credentials) {
				if (!credentials) return null;

				const { email, password } = credentials;
				const user = await prisma.user.findFirst({
					where: { email: email as string },
				});

				// Check if user exists and if the password matches
				if (user && user.password) {
					const isValid = compareSync(password as string, user.password);

					// if password is correct, return the user
					if (isValid) {
						return {
							id: user.id,
							email: user.email,
							name: user.name,
							role: user.role,
						};
					}
				}
				// If user does not exist or password is incorrect, return null
				return null;
			},
		}),
	],
	callbacks: {
		async session({ session, user, trigger, token }: any) {
			// Set the user ID from the token
			session.user.id = token.sub;

			// If there is an update, set the user name
			if (trigger === "update") {
				session.user.name = user.name;
			}

			return session;
		},
	},
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);

import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        fullname: { label: "Full name", type: "text" },
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user: any = {
          id: 1,
          fullname: credentials?.fullname,
          username: credentials?.username,
          password: credentials?.password,
        };

        if (
          credentials?.username === user.username &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, account, profile }: any) {
      if (account?.provider === "credentials" && user) {
        token.id = user.id;
        token.fullname = user.fullname;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
};

export default NextAuth(authOption);
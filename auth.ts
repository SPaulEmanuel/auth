import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_URL,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (!credentials || !credentials.email || !credentials.password)
          return null;

        // const { email, password } = await signInSchema.parseAsync(credentials);

        // const dbUser = await prisma.user.findFirst({
        //   where: { email: email },
        // });

        // if (dbUser && dbUser.password === password) {
        //   const { password, createAt, id, ...dbUserWithoutPassword } = dbUser;
        //   return dbUserWithoutPassword as User;
        // }

        return null;
      },
    }),
  ],
});

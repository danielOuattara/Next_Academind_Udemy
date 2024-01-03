import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "../../../libraries/db_lib";
import { compare } from "bcryptjs";

export const authOptions = {
  session: {
    // strategy: "jwt",
    jwt: true,
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        const client = await connectToDatabase();
        const user = await client
          .db()
          .collection("users")
          .findOne({ email: credentials.email });

        if (!user) {
          client.close();
          throw new Error("Email or Password invalid !");
        }

        const isValidPassword = await compare(
          credentials.password,
          user.password,
        );

        if (!isValidPassword) {
          client.close();
          throw new Error("Email or Password invalid !!");
        }

        client.close();
        return { email: user.email };
      },
    }),
  ],
};

export default NextAuth(authOptions);

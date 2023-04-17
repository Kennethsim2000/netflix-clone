import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        575245925108 -
        sig3sr3qdvpqvf1jnpjt0q5fcoodgbcn.apps.googleusercontent.com, //process.env.GOOGLE_CLIENT_ID
      clientSecret: GOCSPX - PDX3dicR4svffCPdBUF7Z6Fx9KbO, //process.env.GOOGLE_CLIENT_SECRET

      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  debug: true,
  secret: process.env.JWT_SECRET,
});

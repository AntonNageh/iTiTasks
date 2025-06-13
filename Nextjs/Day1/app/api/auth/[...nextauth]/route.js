import { handlers } from "@/auth" // Referring to the auth.ts we just created
export const { GET, POST } = handlers
export { auth as middleware } from "@/auth"
import GithubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  // Other configuration options
});
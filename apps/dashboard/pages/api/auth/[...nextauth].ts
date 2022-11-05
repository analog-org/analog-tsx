import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord";


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    DiscordProvider({
      // @ts-ignore
      clientId: process.env.DISCORD_CLIENT_ID,
      // @ts-ignore
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)
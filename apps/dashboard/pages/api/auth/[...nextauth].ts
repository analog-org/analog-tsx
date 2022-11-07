import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    DiscordProvider({
      // @ts-ignore
      clientId: process.env.DISCORD_CLIENT_ID,
      // @ts-ignore
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "identify guilds email connections",
        },
      },
      profile(profile) {
        return profile;
      },
      // ...add more providers here
    }),
  ],
  callbacks: {
    //@ts-ignore
    jwt: async ({ token, account, profile }) => {
      if (account) {
        token.accessToken = account.access_token;
        token.tokenType = account.token_type;
      }
      if (profile) {
        token.profile = profile;
      }
      return token;
    },
    // @ts-ignore
    session: async ({ session, token }) => {
      // @ts-ignore
      session.accessToken = token.accessToken;
      // @ts-ignore
      session.refreshToken = token.refreshToken;
      // @ts-ignore
      session.tokenType = token.tokenType
      // @ts-ignore
      session.discordUser = token.profile;
      // @ts-ignore
      
      return session;
    },
  },
});

// export default NextAuth(authOptions)

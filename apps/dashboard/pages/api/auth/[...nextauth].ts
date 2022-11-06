import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export default NextAuth({
  session: {
    //@ts-ignore
    jwt: true,
  },
  callbacks: {
    //@ts-ignore
    jwt: async ({ token, user, account, profile }) => {
      if (user) {
        token.profile = profile;
        token.accessToken = account?.accessToken;
        token.refreshToken = account?.refreshToken;
      }
      return Promise.resolve(token);
    },
    // @ts-ignore
    session: async ({ session, token }) => {
      // @ts-ignore
      session.accessToken = token.accessToken;
      // @ts-ignore
      session.refreshToken = token.refreshToken;
      // @ts-ignore
      session.user = token.profile;
      const res = await fetch(`https://discord.com/api/v10/users/@me/guilds`, {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      });
      const data = await res.json();
      // @ts-ignore
      session.user.profile.guilds = data;
      return session;
    },
  },
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
});

// export default NextAuth(authOptions)

import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions = {
  
  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_SECRET,
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
        console.log(profile);
        if (profile.avatar === null) {
          const defaultAvatarNumber = parseInt(profile.discriminator) % 5;
          profile.image_url = `https://cdn.discordapp.com/embed/avatars/${defaultAvatarNumber}.png`;
        } else {
          const format = profile.avatar.startsWith("a_") ? "gif" : "png";
          profile.image_url = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${format}`;
        }

        return {
          id: profile.id,
          name: profile.username,
          discriminator: profile.discriminator,
          image: profile.image_url,
          accentColor: profile.accentColor,
        };
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
      session.tokenType = token.tokenType;
      // @ts-ignore
      session.discordUser = token.profile;
      // @ts-ignore
      
      return session;
    },
  },
};
// @ts-ignore
export default NextAuth(authOptions)

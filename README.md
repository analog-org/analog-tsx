<p align="center">
  <a href="#">
    <img alt="Nyx" src="https://cdn.discordapp.com/attachments/762378948566319136/1004125412261101650/analog_ts_logo.svg"/>
  </a>
</p>

<div align="center">
  
  This is a typescript template for building Discord bots with a dashboard in NextJS, TailwindCSS, Discord.JS, Next-Auth, and Prisma.
  
  <br />
</div>
<div align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white">
  <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
  <img src="https://img.shields.io/badge/Turbo-Repo-blueviolet.svg?style=for-the-badge&logo=turborepo&labelColor=000000&logoWidth=20&logoColor=white">
</div>
<div align="center">
  <img alt="npm" src="https://img.shields.io/npm/v/discord.js?label=D.JS&style=flat-square">
  <img alt="npm" src="https://img.shields.io/npm/v/next?label=next&style=flat-square">
  <img alt="npm" src="https://img.shields.io/npm/v/next-auth?label=next-auth&style=flat-square">
  <img alt="npm" src="https://img.shields.io/npm/v/turbo?label=Turbo&style=flat-square">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/analog-org/analog-tsx?style=flat-square">
  <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/w/analog-org/analog-tsx?style=flat-square">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues/analog-org/analog-tsx?style=flat-square">
</div>

# Discord Bot Features
- Discord.JS v14
- Typescript
- Uses functions and ESM modules instead of classes
- [VSCode Extension](https://marketplace.visualstudio.com/items?itemName=BossDaily.analog-ts-snippets&ssr=false)
- Command Handler
- Context Menu Handler
- Event Handler
- Button handler
- Modal handler
- Select Menu Handler


# Dashboard features
- NextJS
- Typescript
- [Authjs](https://authjs.dev/) - For easy authentication
- TailwindCSS
- 

# Getting Started 
## Initial Setup
```sh
git clone https://github.com/analog-org/analog-tsx.git
cd analog-tsx
npm i
```
## ENV Variables

- Copy `.env.example` and paste it in the main directory
- Rename it to just `.env`
- Fill in the values for the environment variables


1. Create an APP on [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a bot user and [copy the token](https://discordjs.guide/preparations/setting-up-a-bot-application.html#your-bot-s-token)
3. Put the token you copied in the `DISCORD_BOT_TOKEN` variable in the `.env` file
4. To get the `DISCORD_CLIENT_ID` and `NEXT_PUBLIC_DISCORD_CLIENT_ID` values, go to the OAuth2 tab in your application and copy the `Client ID` value
![image](https://media.discordapp.net/attachments/1004769215347175484/1059533910599540767/image.png)
5. To get the `DISCORD_CLIENT_SECRET` value, go to the OAuth2 tab in your application and copy the `Client Secret` value (or reset the secret and copy the new one)
![image](https://cdn.discordapp.com/attachments/1004769215347175484/1059534856817745930/image.png)
6. For `NEXTAUTH_SECRET` you can generate a random 32 character string by doing `openssl rand -base64 32` or at [generate.plus](https://generate.plus/en/base64)
7. `NEXTAUTH_URL` is the URL of your website (e.g. `http://localhost:3000`, `https://analog.org`, `https://panel.bossdaily.me`)

### Your .env file should endup looking like this
```js title=".env"
DISCORD_CLIENT_ID="61266727282091783"
DISCORD_BOT_TOKEN="OTI2Nnrjh9ia03ndNTIw.GjSdq1.bh2983-34yhtg9wasn9iy34ifgkaopneianwh"
NEXT_PUBLIC_DISCORD_CLIENT_ID="61266727282091783"
DISCORD_CLIENT_SECRET="uqerhgeas2HxewZQfdggK9gl-KLcnbgja"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="34gaw9jmig04jma0hi-mwaehawh-KLcnbgja"
```
:::tip ENV Variables are global
You can use any ENV variables you add here anywhere in the project
:::
## Starting The Bot

To start the bot & the dashboard you have to be in the root directory of the project and run the following command  
```bash
npm start
```
### Developer mode
You can do
```bash
npm run dev
```
To get into developer mode, meaning the bot or the dashboard restart & recompile on code changes

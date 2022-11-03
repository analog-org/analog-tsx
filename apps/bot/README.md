<p align="center">
  <a href="#">
    <img alt="Nyx" src="https://cdn.discordapp.com/attachments/762378948566319136/1004125412261101650/analog_ts_logo.svg"/>
  </a>
</p>

<div align="center">
  
  This is a typescript template for Discord Bots built in DiscordJS.
  
  <br />
</div>
<div align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white">
  
</div>
<div align="center">
  <img alt="npm" src="https://img.shields.io/npm/v/discord.js?label=D.JS&style=flat-square">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/ana-log/analog-ts?style=flat-square">
  <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/w/ana-log/analog-ts?style=flat-square">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues/ana-log/analog-ts?style=flat-square">
</div>

# Features
- Discord.JS v14
- Uses functions and ESM modules instead of classes
- [VSCode Extension](https://marketplace.visualstudio.com/items?itemName=BossDaily.analog-ts-snippets&ssr=false)
- Command Handler
- Context Menu Handler
- Event Handler
- Button handler
- Modal handler
- Select Menu Handler


# Supports
- Supports Discord.JS v14 (not v13)
- discord-api-types
- Slash Commands
- Embeds
- Buttons
- Selection menus
- Context menus
- Modals
- Events
- Collections



## Getting Started 

```sh
git clone https://github.com/ana-log/analog-ts.git
cd analog-ts
npm i
```
- Copy `.env.example` and paste it in the main directory
- Rename it to just `.env`
- Put your bot token in `TOKEN=` 
- Example `TOKEN=239ung2389g-0n2q9gjn20-g98n293838h9wg2a-awjj`
- To start the bot do ↓
```sh
npm start
```
### If you want to setup a dev environment 
1. Open up 2 Terminals in VS Code (or your IDE of choice)
2. First terminal do `npm run watch`
3. Second terminal do `npm run dev` 
<br>
<br>
This should restart the bot everytime you make a code change
<
<br>
**MAKE SURE `registerCmd` IN `devconfig.ts` IS SET TO FALSE WHILE IN DEV MODE, OTHERWISE DISCORD WILL RATELIMIT YOU!**
## Bots using Analog.ts
- [S.I.M.P.S Discord bot](https://github.com/simpsmc/discordbot)
- [Observer-Bot-TS](https://github.com/ComparatorCraftSMP/observer-bot-ts)
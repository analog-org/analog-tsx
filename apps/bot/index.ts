//dependancy for discordjs
import {
  Client,
  GatewayIntentBits,
  Collection,
  ClientApplication,
  InteractionType,
  Interaction,
  CommandInteraction,
  Partials,
  ButtonInteraction,
  ModalSubmitInteraction,
  SelectMenuInteraction,
} from "discord.js";
import fs, { read, readdirSync } from "fs";
import dotenv, { config } from "dotenv";
import { regCMD } from "./src/deploy-commands";
import { devConfig } from "./devconfig";
import path from "node:path";

dotenv.config();
export const client: any = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessageTyping,
  ],
  partials: [
    Partials.Channel, // Required to receive DMs
  ],
});

/* 
    The following code below takes all the events in the events folder and put it in an array and filters it by .js files
    The entire thing allows handling events to be as easy as adding it to the events folder and then restarting the bot
*/
const eventPath = path.join(__dirname, "src/events");
const eventFiles = fs
  .readdirSync(eventPath)
  .filter((file) => file.endsWith(".js"));
// This retrieves the event files and runs them if they should be run once or constantly ↓ this actually runs the event files code
for (const file of eventFiles) {
  const filePath = path.join(eventPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args: any) => event.execute(...args));
  } else {
    client.on(event.name, (...args: any) => event.execute(...args));
  }
}


client.commands = new Collection();
// This gets the command modules from the command folders
const cmdPath = path.join(__dirname, "src/commands");
const commandFiles = fs
  .readdirSync(cmdPath)
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const filePath = path.join(cmdPath, file);
  const command = require(filePath);

  client.commands.set(command.data.name, command);
}

// This executes an Application commands when a player does a Application command
client.on("interactionCreate", async (interaction: CommandInteraction) => {
  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    await interaction.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    });
    console.error(error)
  }
});

client.buttons = new Collection();
client.modals = new Collection();
client.selectMenus = new Collection();

const compPath = path.join(__dirname, "src/components");
const componentFolders = readdirSync(compPath);


for (const folder of componentFolders) {
  const comps = path.join(compPath, folder);
  const componentFiles = readdirSync(comps).filter((file) =>
    file.endsWith(".js")
  );
  
  switch (folder) {
    case "buttons":
      for (const file of componentFiles) {
        const filePath = path.join(compPath, folder, file);
        const button = require(filePath);
        
        client.buttons.set(button.data.name, button);
      }
      break;
    case "modals":
      for (const file of componentFiles) {
        const filePath = path.join(compPath, folder, file);
        const modal = require(filePath);
        client.modals.set(modal.data.name, modal);
      }
      break;
    case "selectMenus":
      for (const file of componentFiles) {
        const filePath = path.join(compPath, folder, file);
        const selectmenu = require(filePath);
        client.selectMenus.set(selectmenu.data.name, selectmenu);
      }
      break;
    default:
      break;
  }
}

client.on(
  "interactionCreate",
  async (
    interaction:
      | ButtonInteraction
      | ModalSubmitInteraction
      | SelectMenuInteraction
  ) => {
    if (interaction.isButton()) {
      const button = client.buttons.get(interaction.customId);
      

      try {
        await button.execute(interaction);
      } catch (error) {
        console.error(error);
        await interaction.reply({
          content: "There was an error while pressing this button!",
          ephemeral: true,
        });
      }
    } else if (interaction.isSelectMenu()) {
      const selectMenu = client.selectMenus.get(interaction.customId);

      try {
        await selectMenu.execute(interaction);
      } catch (error) {
        console.error(error);
        await interaction.reply({
          content: "There was an error while selecting this option!",
          ephemeral: true,
        });
        
      }
    } else if (interaction.type === InteractionType.ModalSubmit) {
      
      const modal = client.modals.get(interaction.customId);

      try {
        await modal.execute(interaction);
      } catch (error) {
        console.error(error);
        await interaction.reply({
          content: "There was an error while submitting this modal!",
          ephemeral: true,
        });
      }
    }
  }
);

//This is what logs the bot in
client.login(process.env.DISCORD_BOT_TOKEN);
client.on("ready", async () => {
  console.log(
    `The bot is up! Logged in as ${client.user?.tag} at ${client.readyAt}`
  );
  if (devConfig.registerCmd === true) {
    regCMD(client.user.id);
  }
});

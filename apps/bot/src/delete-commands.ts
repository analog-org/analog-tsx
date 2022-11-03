import { SlashCommandBuilder } from "@discordjs/builders";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { client } from "../index";
import dotenv from "dotenv";


export const deleteCMD = (clientId: string) => {
  const rest = new REST({ version: "9" }).setToken(process.env.TOKEN!);

  rest
    .put(Routes.applicationCommands(clientId), { body: [] })
    .then(() => console.log(`Successfully deleted all application commands.`))
    .catch(console.error);
};
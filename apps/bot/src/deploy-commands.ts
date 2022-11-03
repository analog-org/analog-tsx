// Discordjs dependancy

// const fs = require("fs");
import fs from "fs";
import path from "node:path";
import { SlashCommandBuilder } from "@discordjs/builders";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { client } from "../index";
import dotenv from "dotenv";

dotenv.config();
export const regCMD = (clientId: string) => {
  // dotenv dependancy

  //Gets slash commands
  const commands: any[] = [];
  const cmdPath = path.join(__dirname, "commands");
  const cmdFiles = fs
    .readdirSync(cmdPath)
    .filter((file) => file.endsWith(".js"));

  const rest = new REST({ version: "9" }).setToken(process.env.TOKEN!);

  for (const file of cmdFiles) {
    const filePath = path.join(cmdPath, file);
    const command = require(filePath);
    commands.push(command.data.toJSON());
  }

  rest
    .put(Routes.applicationCommands(clientId), { body: commands })
    .then(() =>
      console.log(
        `Successfully registered ${commands.length} application commands.`
      )
    )
    .catch(console.error);
};





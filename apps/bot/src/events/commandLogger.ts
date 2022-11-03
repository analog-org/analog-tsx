import { CommandInteraction, Interaction, InteractionType, ChannelType } from "discord.js";

//This logs all interactions
module.exports = {
  name: "interactionCreate",
  execute(interaction: Interaction) {
    if (interaction.type === InteractionType.ApplicationCommand) {
      switch (interaction.channel?.type) {
        case (ChannelType.GuildText):
        case (ChannelType.GuildNews):
          console.log(
            `${interaction.createdAt}: ${interaction.user.tag} in #${interaction.channel.name} triggered a ${interaction.type} called ${interaction.commandName}.`
          );
          break;
        case (ChannelType.GuildNewsThread):
        case (ChannelType.GuildPublicThread):
        case (ChannelType.GuildPrivateThread):
          console.log(
            `${interaction.createdAt}: ${interaction.user.tag} in #${interaction.channel.parent?.name} in thread ${interaction.channel.name} triggered a ${interaction.type} called ${interaction.commandName}.`
          );
          break;
        case (ChannelType.DM):
          console.log(
            `${interaction.createdAt}: ${interaction.user.tag} in DMs triggered a ${interaction.type} called ${interaction.commandName}.`
          );
          break;
      }
    }
  },
};

import {
  Interaction,
  EmbedBuilder,
  CommandInteractionOptionResolver,
  Message,
  CommandInteraction,
  ApplicationCommand,
  SlashCommandBuilder,
  SlashCommandStringOption,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  MessageActionRowComponentBuilder,
} from "discord.js";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("shows a list of commands for the bot"),

  async execute(interaction: CommandInteraction) {
    try {
      let commandsList: string | undefined;
      const client = interaction.client;
      const cmd = await client.application?.commands.fetch();

      commandsList = cmd
        ?.map(
          (cmd: ApplicationCommand) => `**/${cmd.name}** - ${cmd.description}`
        )
        .join("\n");

      const row = new ActionRowBuilder<MessageActionRowComponentBuilder>().addComponents(
        new ButtonBuilder()
          .setCustomId("botInfo")
          .setEmoji("🤖")
          .setStyle(ButtonStyle.Primary)
          .setLabel("Bot Info"),
      );

      const embed = new EmbedBuilder()
        .setColor(`#6bde36`)
        .setTitle(`${client.user?.username}'s commands`)
        .setDescription(`${commandsList}`)
        .setThumbnail(client.user?.avatarURL({ forceStatic: false })!);

      await interaction.reply({ embeds: [embed], components: [row] });
    } catch (error) {
      await interaction.reply({
        content: "This server has 0 commands",
        ephemeral: true,
      });
      console.error(error);
    }
  },
};

import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonInteraction,
  ButtonStyle,
  EmbedBuilder,
  MessageActionRowComponentBuilder,
  SelectMenuBuilder,
} from "discord.js";
import { client } from "../../../index";

module.exports = {
  data: {
    name: `botInfo`,
  },
  async execute(interaction: ButtonInteraction) {
    try {
      const row =
        new ActionRowBuilder<MessageActionRowComponentBuilder>().addComponents(
          new SelectMenuBuilder()
            .setCustomId("currentMood")
            .setPlaceholder('Choose your mood')
            .setOptions([{ label: "happy", value: "happy", emoji: "😃" }, { label: 'sad', value: 'sad', emoji: "😭"}, { label: 'mischievous', value: 'mischievous', emoji: "😈"}])
        );
      const embed = new EmbedBuilder()
        .setColor(`#6bde36`)
        .setTitle(`${client.user?.username}'s commands`)
        .setDescription(`${client.user.username}`)
        .setThumbnail(client.user?.avatarURL({ forceStatic: false }));

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

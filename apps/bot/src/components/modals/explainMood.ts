import { ButtonInteraction, EmbedBuilder, ModalSubmitInteraction } from "discord.js";
import { client } from "../../../index";

module.exports = {
  data: {
    name: `explainMood`,
  },
  async execute(interaction: ModalSubmitInteraction) {
    try {
      const embed = new EmbedBuilder()
        .setColor("Random")
        .setTitle(`${interaction.user.username}'s emotion`)
        .setDescription(`${interaction.fields.getTextInputValue('explain_mood')}`)
        .setThumbnail(interaction.user?.avatarURL({ forceStatic: false })!);

      await interaction.reply({ embeds: [embed] });
    } catch (error) {
      await interaction.reply({
        content: "This server has 0 commands",
        ephemeral: true,
      });
      console.error(error);
    }
  },
};

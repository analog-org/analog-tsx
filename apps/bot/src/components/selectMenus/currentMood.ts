import {
  ActionRow,
  ActionRowBuilder,
  ButtonInteraction,
  EmbedBuilder,
  ModalActionRowComponentBuilder,
  ModalBuilder,
  ModalSubmitInteraction,
  SelectMenuInteraction,
  TextInputBuilder,
  TextInputStyle,
} from "discord.js";
import { client } from "../../../index";

module.exports = {
  data: {
    name: `currentMood`,
  },
  async execute(interaction: SelectMenuInteraction) {
    const emotion = interaction.values[0]
    try {
      

      const modal = new ModalBuilder()
        .setTitle(`Why are you ${emotion}?`)
        .setCustomId("explainMood")
        .setComponents(
          new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(
            new TextInputBuilder()
              .setLabel(`Why are you ${emotion}?`)
              .setStyle(TextInputStyle.Paragraph)
              .setPlaceholder(`Explain why your ${emotion}`)
              .setCustomId("explain_mood")
          )
        );
      
      await interaction.showModal(modal);
    } catch (error) {
      await interaction.reply({
        content: "This server has 0 commands",
        ephemeral: true,
      });
      console.error(error);
    }
  },
};

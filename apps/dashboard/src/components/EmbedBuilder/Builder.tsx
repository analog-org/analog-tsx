import {
  DiscordTime,
  DiscordBold,
  DiscordItalic,
  DiscordUnderlined,
  DiscordInlineCode,
  DiscordSpoiler,
  DiscordQuote,
  DiscordActionRow,
  DiscordAttachment,
  DiscordAttachments,
  DiscordButton,
  DiscordCommand,
  DiscordEmbed,
  DiscordEmbedField,
  DiscordEmbedFields,
  DiscordEmbedDescription,
  DiscordEmbedFooter,
  DiscordInvite,
  DiscordMention,
  DiscordMessage,
  DiscordMessages,
  DiscordReaction,
  DiscordReactions,
  DiscordReply,
  DiscordSystemMessage,
  DiscordTenorVideo,
  DiscordThread,
  DiscordThreadMessage,
  DiscordCustomEmoji,
} from "@skyra/discord-components-react";
import { NextPage } from "next";
import { ReactNode } from "react";
import Image from "next/image";
import { Avatar, Dropdown, Navbar, Footer, Accordion } from "flowbite-react";
import InputContainer from "./InputContainer";

const Builder: NextPage = () => {
  return (
    <div className="py-2 pr-4 flex flex-row gap-2">
      <InputContainer>
        <Accordion alwaysOpen={true}>
          <Accordion.Panel>
            <Accordion.Title>Embed</Accordion.Title>
            <Accordion.Content>
               fdsafsadfsdfa
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </InputContainer>
      <div className="rounded-2xl">
        <DiscordMessages>
          <DiscordMessage author="Analog-tsx">
            
            Hello, World!
          </DiscordMessage>
        </DiscordMessages>
      </div>
    </div>
  );
};

export default Builder;

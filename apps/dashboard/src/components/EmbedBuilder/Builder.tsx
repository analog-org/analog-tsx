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
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { ReactNode } from "react";
import Image from "next/image";
import { Avatar, Dropdown, Navbar, Footer, Accordion } from "flowbite-react";
import InputContainer from "./InputContainer";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

type Props = {
  botProfile: user
}

const Builder: NextPage<Props> = ({botProfile}) => {
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
          <DiscordMessage author={`${botProfile.username}`} avatar={`https://cdn.discordapp.com/avatars/${botProfile.id}/${botProfile.avatar}.png`} bot={true} verified={true}>
            
            Hello, World!
          </DiscordMessage>
        </DiscordMessages>
      </div>
    </div>
  );
};


export default Builder;

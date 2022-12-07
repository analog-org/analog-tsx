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
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { ReactNode } from "react";
import Image from "next/image";
import { Avatar, Dropdown, Navbar, Footer, Accordion } from "flowbite-react";
import InputContainer from "./InputContainer";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

type Props = {
  botProfile: user;
};

const Builder: NextPage<Props> = ({ botProfile }) => {
  return (
    <div className="py-2 pr-4 flex flex-row gap-2">
      <InputContainer>
        <Accordion alwaysOpen={true}>
          <Accordion.Panel>
            <Accordion.Title>Author</Accordion.Title>
            <Accordion.Content>
              <form>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Author URL
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Icon URL
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Author
                  </label>
                  <textarea
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                
                  />
                </div>
              </form>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </InputContainer>
      <div className="rounded-3xl">
        <DiscordMessages className="rounded-2xl">
          <DiscordMessage
            author={`${botProfile.username}`}
            avatar={`https://cdn.discordapp.com/avatars/${botProfile.id}/${botProfile.avatar}.png`}
            bot={true}
            verified={true}
          >
            Hello, World!
          </DiscordMessage>
        </DiscordMessages>
      </div>
    </div>
  );
};

export default Builder;

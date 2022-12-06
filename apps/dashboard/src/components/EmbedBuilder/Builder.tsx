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

const Builder: NextPage = () => {
  return (
    <div className="py-2 pr-4 flex flex-row gap-2">
      <div>
        <Accordion alwaysOpen={true}>
          <Accordion.Panel>
            <Accordion.Title>What is Flowbite?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out this guide to learn how to{" "}
                <a
                  href="https://flowbite.com/docs/getting-started/introduction/"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  get started
                </a>{" "}
                and start developing websites even faster with components on top
                of Tailwind CSS.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
      <div className="rounded-2xl">
        <DiscordMessages>
          <DiscordMessage author="Analog-tsx" avatar=""> Hello, World! </DiscordMessage>
        </DiscordMessages>
      </div>
    </div>
  );
};

export default Builder;

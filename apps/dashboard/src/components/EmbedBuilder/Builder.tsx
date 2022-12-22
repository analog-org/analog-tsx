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
import { ReactNode, useState } from "react";
import Image from "next/image";
import { Avatar, Dropdown, Navbar, Footer, Accordion } from "flowbite-react";
import InputContainer from "./InputContainer";
import { unstable_getServerSession } from "next-auth/next";
import Colorful from "@uiw/react-color-colorful";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import ChannelSelection from "../Selection/ChannelSelection/ChannelSelection";
import { type APIChannel } from "discord-api-types/v10";

type Props = {
  botProfile?: user;
  author?: {
    name: string;
    updateName: (name: string) => void;
    url: string;
    updateUrl: (url: string) => void;
    icon_url: string;
    updateIconUrl: (icon_url: string) => void;
  };
  title?: string;
  updateTitle?: (title: string) => void;
  description?: string;
  updateDescription?: (description: string) => void;
  color?: string;
  updateColor?: (color: string) => void;
  url?: string;
  updateUrl?: (url: string) => void;
  thumbnail?: {
    url?: string;
    updateUrl?: (url: string) => void;
  };
  image?: {
    url?: string;
    updateUrl?: (url: string) => void;
  };
  footer?: {
    text?: string;
    updateText: (text: string) => void;
    icon_url?: string;
    updateIconUrl?: (icon_url: string) => void;
  }
  timestamp?: string;
  updateTimestamp?: (timestamp: string) => void;
  fields?: {
    name?: string;
    updateName: (name: string) => void;
    value?: string;
    updateValue?: (value: string) => void;
    inline?: boolean;
    updateInline?: (inline: boolean) => void;
  }[];
  addField?: () => void;
  removeField?: (index: number) => void;
};

const Builder: NextPage<Props> = (props: Props) => {
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
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Author Icon URL
                    </label>
                    <input
                      type="text"
                      id="author_icon_url"
                      className="resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Author
                  </label>
                  <textarea className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
              </form>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Body</Accordion.Title>
            <Accordion.Content>
              <form>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Title
                  </label>
                  <textarea
                    value={props.title}
                    onChange={(e) => props.updateTitle(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Description
                  </label>
                  <textarea
                    value={props.description}
                    onChange={(e) =>
                      props.updateDescription(e.target.value)
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      URL
                    </label>
                    <input
                      value={props.url}
                      onChange={(e) =>
                        props.updateUrl(e.target.value)
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Color
                    </label>
                    <Dropdown
                      label={
                        <input
                          value={props.color}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      }
                      inline
                      dismissOnClick={false}
                    >
                      <Dropdown.Item>
                        <Colorful
                          disableAlpha={true}
                          color={props.color}
                          onChange={(colors) =>
                            props.updateColor(colors.hex)
                          }
                        />
                      </Dropdown.Item>
                    </Dropdown>
                  </div>
                </div>
              </form>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </InputContainer>
      <div className="rounded-3xl">
        <DiscordMessages className="rounded-2xl">
          <DiscordMessage
            author={`${props.botProfile.username}`}
            avatar={`https://cdn.discordapp.com/avatars/${props.botProfile.id}/${props.botProfile.avatar}.png`}
            bot={true}
            verified={true}
          >
            <DiscordEmbed
              slot="embeds"
              embedTitle={props.title}
              color={props.color}
              url={props.url}
              authorImage={props.author?.icon_url}
              authorName={props.author?.name}
              authorUrl={props.author?.url}
            >
              <DiscordEmbedDescription slot="description">
                {props.description}
              </DiscordEmbedDescription>
            </DiscordEmbed>
          </DiscordMessage>
        </DiscordMessages>
      </div>
    </div>
  );
};

export default Builder;

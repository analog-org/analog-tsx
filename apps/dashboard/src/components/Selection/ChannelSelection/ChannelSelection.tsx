import { NextPage } from "next";
import React, { useState } from "react";
import { type APIChannel } from "discord-api-types/v10";

import Select from "react-select";

type Props = {
  channels: APIChannel[];
};

const ChannelSelection: NextPage<Props> = ({ channels }) => {
  const channelArray = Object.values(channels);
  const options = [{value: '', label: 'Select a channel'}];
  channelArray.forEach((c) => options.push({ value: c.id, label: c.name }));

  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        isSearchable
        isClearable
        options={options}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "hotpink",
            primary: "black",
          },
        })}
      />
    </>
  );
};

export default ChannelSelection;

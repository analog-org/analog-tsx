import { NextPage } from "next";
import React, { useState } from "react";
import { type APIChannel } from "discord-api-types/v10";

import Select from "react-select";

type Props = {
  channels: APIChannel[];
};

const ChannelSelection: NextPage<Props> = ({ channels }) => {
  const channelArray = Object.values(channels);
  const options = [{ value: "", label: "Select a channel" }];
  channelArray.forEach((c) => options.push({ value: c.id, label: c.name }));

  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        isSearchable
        isClearable
        options={options}
        styles={{
          control: (styles) => ({ ...styles, backgroundColor: "black"}),
          option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
              ...styles,
              backgroundColor: isDisabled
                ? null
                : isSelected
                ? '#00b0f4'
                : isFocused
                ? '#00b0f4'
                : null,
                
            color: isDisabled
              ? '#ccc'
              : isSelected
              ? 'white'
              : isFocused
              ? 'white'
              : 'black',

            };
          },
          placeholder: styles => ({ ...styles, color: 'white' }),
          input: styles => ({ ...styles, color: 'white' }),
          singleValue: (styles, { data }) => ({ ...styles, color: 'white' })

        }}
      />
    </>
  );
};

export default ChannelSelection;

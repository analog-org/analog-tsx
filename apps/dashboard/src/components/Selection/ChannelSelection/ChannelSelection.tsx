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
    <div className="flex">
      <Select
        placeholder="Select a channel"
        className="basic-single"
        classNamePrefix="select"
        isSearchable
        isClearable
        options={options}
        styles={{
          control: (styles) => ({ ...styles, backgroundColor: "#36393e"}),
          option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
              ...styles,
              backgroundColor: 
                isDisabled
                ? null
                : isSelected
                ? '#2f3136'
                : isFocused
                ? '#00b0f4'
                : null
              , 
                
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
    </div>
  );
};

export default ChannelSelection;

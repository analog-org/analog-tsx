import { NextPage } from "next";
import React, { useState } from "react";
import { type APIChannel } from 'discord-api-types/v10';

import Select from "react-select";



type Props = {
  channels: APIChannel[]
};


const ChannelSelection: NextPage<Props> = ({channels}) => {
  const options = [{}]
  channels.forEach((c) => options.push({value: c.id, label: c.name}))
  
  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        isSearchable
        isClearable
        options={options}
        
      />
    </>
  );
};

export default ChannelSelection;

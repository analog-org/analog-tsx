import { NextPage } from "next";
import { ReactNode } from "react";
import Image from "next/image";
import { Avatar, Dropdown, Navbar, Footer, Accordion } from "flowbite-react";

type Props = {
  children: ReactNode;
};

const InputContainer: NextPage<Props> = ({ children }) => {
  return (
    <div>
      <Accordion alwaysOpen={true}>
        <Accordion.Panel>
          <Accordion.Title>Embed</Accordion.Title>
          <Accordion.Content>{children}</Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default InputContainer;

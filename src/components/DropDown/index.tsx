import React, { useState } from "react";
import Button from "../Button";
import { Container } from "./styles";
import DropDownList from "./DropDownList";

export type DropDownItemType = {
  name: React.ReactNode;
  handleClick: () => void;
};

const DropDown = ({
  anchor,
  items,
}: {
  anchor: React.ReactNode;
  items: DropDownItemType[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <Button variant="text" onClick={toggleIsOpen}>
        {anchor}
      </Button>
      {isOpen && <DropDownList items={items} setIsOpen={setIsOpen} />}
    </Container>
  );
};

export default DropDown;

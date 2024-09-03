import React, { useEffect, useRef, useState } from "react";
import Button from "../Button";
import { Container, DropDownItem, DropDownList } from "./styles";
import useOutsideClickDetector from "../../Shared/hooks/useOutsideClickDetector";

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
  const clickedRef = useRef<HTMLDivElement>(null);
  useOutsideClickDetector(clickedRef, setIsOpen);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container ref={clickedRef}>
      <Button variant="text" onClick={toggleIsOpen}>
        {anchor}
      </Button>
      {isOpen && (
        <DropDownList>
          {items &&
            items.map((item) => (
              <DropDownItem
                key={JSON.stringify(item.name)}
                onClick={item.handleClick}
              >
                {item.name}
              </DropDownItem>
            ))}
        </DropDownList>
      )}
    </Container>
  );
};

export default DropDown;

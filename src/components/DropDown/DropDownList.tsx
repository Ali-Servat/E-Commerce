import { useRef } from "react";
import { DropDownItemType } from ".";
import { DropDownItem, StyledDropDownList } from "./styles";
import useOutsideClickDetector from "../../Shared/hooks/useOutsideClickDetector";

const DropDownList = ({
  items,
  setIsOpen,
}: {
  items: DropDownItemType[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const clickedRef = useRef<HTMLUListElement>(null);
  useOutsideClickDetector(clickedRef, setIsOpen);

  return (
    <StyledDropDownList ref={clickedRef}>
      {items &&
        items.map((item) => (
          <DropDownItem
            key={JSON.stringify(item.name)}
            onClick={item.handleClick}
          >
            {item.name}
          </DropDownItem>
        ))}
    </StyledDropDownList>
  );
};

export default DropDownList;

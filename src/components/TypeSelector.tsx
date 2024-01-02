import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import React from "react";
import getProductTypes from "../hooks/getProductTypes";

interface Props {
  onSelectType: (type: string) => void;
  selectedType: string | null;
}

const TypeSelector = ({ onSelectType, selectedType }: Props) => {
  const { data } = getProductTypes();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedType || "Types"}
      </MenuButton>
      <MenuList>
        {data.map((type, index) => (
          <MenuItem onClick={() => onSelectType(type)} key={index}>
            {type}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default TypeSelector;

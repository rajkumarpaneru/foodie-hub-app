import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import React from "react";
import getProductTypes from "../hooks/getProductTypes";

const TypeSelector = () => {
  const { data } = getProductTypes();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Types
      </MenuButton>
      <MenuList>
        {data.map((type, index) => (
          <MenuItem key={index}>{type}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default TypeSelector;

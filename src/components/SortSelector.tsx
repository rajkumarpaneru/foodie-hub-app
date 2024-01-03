import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import React from "react";
import getProductTypes from "../hooks/getProductTypes";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order Products By
      </MenuButton>
      <MenuList>
        <MenuItem>Date Added</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Name</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

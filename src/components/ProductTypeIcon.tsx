import { HStack, Icon } from "@chakra-ui/react";
import { LuVegan } from "react-icons/lu";
import { TbCheese } from "react-icons/tb";
import { GiChickenLeg } from "react-icons/gi";
import { IconType } from "react-icons/lib";

interface Props {
  type: string;
}

const ProductTypeIcon = ({ type }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    vegan: LuVegan,
    veg: TbCheese,
    "non-veg": GiChickenLeg,
  };
  return (
    <HStack marginY={2}>
      <Icon as={iconMap[type]} />
    </HStack>
  );
};

export default ProductTypeIcon;

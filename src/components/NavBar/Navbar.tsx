import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import { ColorModeSwitch } from "./ColoModeSwitch";
import SearchInput from "./SearchInput";

export const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={"60px"} />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

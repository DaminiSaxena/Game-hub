import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import { ColorModeSwitch } from "./ColoModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <HStack>
      <Link to="/">
        <Image src={logo} boxSize={"60px"} objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

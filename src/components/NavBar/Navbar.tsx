import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import { ColorModeSwitch } from "./ColoModeSwitch";
import SearchInput from "./SearchInput";

interface props {
  onSearch: (searchText: string) => void;
}

export const Navbar = ({ onSearch }: props) => {
  return (
    <HStack>
      <Image src={logo} boxSize={"60px"} />
      <SearchInput
        onSearch={(searchText) => {
          onSearch(searchText);
        }}
      />
      <ColorModeSwitch />
    </HStack>
  );
};

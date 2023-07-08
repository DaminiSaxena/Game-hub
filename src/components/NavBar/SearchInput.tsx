import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Search games..."
          variant={"filled"}
          ref={ref}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;

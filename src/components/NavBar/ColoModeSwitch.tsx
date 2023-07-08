import { HStack, Switch, useColorMode } from "@chakra-ui/react";

export const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack whiteSpace={"nowrap"}>
      <Switch
        defaultChecked
        isChecked={colorMode === "dark"}
        colorScheme="green"
        padding="10px"
        onChange={toggleColorMode}
      />
      <label>Dark Mode</label>
    </HStack>
  );
};

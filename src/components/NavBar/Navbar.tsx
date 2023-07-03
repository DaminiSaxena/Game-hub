import { HStack, Image  } from "@chakra-ui/react"
import logo from "../../assets/logo.webp"
import { ColorModeSwitch } from "./ColoModeSwitch";
import styles from "./NavBar.module.scss";

export const Navbar = () => {
    return (
    <HStack className={styles.navbar}>
        <Image src={logo} boxSize={"60px"} />
        <ColorModeSwitch />
    </HStack>);
}
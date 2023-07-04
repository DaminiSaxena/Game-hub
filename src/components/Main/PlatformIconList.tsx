import { HStack, Icon, Text } from "@chakra-ui/react";
import {Platform} from "./UseGame"
import {FaWindows, FaXbox, FaLinux, FaApple, FaPlaystation, FaAndroid} from "react-icons/fa";
import {MdPhoneIphone} from "react-icons/md";
import {SiNintendo} from "react-icons/si";
import {BsGlobe} from "react-icons/bs";
import { IconType } from "react-icons";
import { color } from "framer-motion";

interface props {
    platforms: Platform[];
}

export const PlatformIconList = ({platforms}:props) => {
    const iconMap: {[key:string]: IconType} = {
        pc: FaWindows,
        placestation: FaPlaystation,
        xbox: FaXbox,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        nintendo: SiNintendo,
        web: BsGlobe
    }
return (<HStack padding="1px">
  {
    platforms?.map((platform) => {return <Icon as={iconMap[platform.slug] } color={"gray.500"} marginY= "1px"/>})
    //platforms?.map((platform) => <Text>{platform.name}</Text>)
  } 
</HStack>);
}
import { Image, ImageProps } from "@chakra-ui/react";

import meh from "../../assets/meh.png";
import thumbsUp from "../../assets/thumbsUp.jpg";
import bullsEye from "../../assets/bullsEye.png";

interface props {
  rating: number;
}

const Emoji = ({ rating }: props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbsUp, alt: "recommended" },
    5: { src: bullsEye, alt: "exceptional" },
  };

  return <Image marginTop={3} {...emojiMap[rating]} boxSize={"25px"} />;
};

export default Emoji;

import { useContext } from "react";
import Image from "next/image";
import { Box, Icon, Flex } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Flex justifyContent="center" alignItems="center" marginRight="8">
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={scrollPrev}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Flex justifyContent="center" alignItems="center" marginRight="8">
      <Icon
        as={FaArrowAltCircleRight}
        onClick={scrollNext}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};
const ImageScrollbar = ({ data }) => {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      style={{ overflow: "hidden" }}
    >
      {data.map((image) => (
        <Box
          width={910}
          itemID={image.id}
          overflow="hidden"
          p="1"
          key={image.id}
        >
          <Image
            src={image.url}
            alt="properties"
            width="1000px"
            height="500px"
            unoptimized
          />
          {/* <Image
            src={image.url}
            placeholder="blur"
            blurDataURL={image.url}
            alt="properties"
            width="1000px"
            height="500px"
            sizes="(max-width:500px) 100px,(max-width:1024px) 400px,1000px"
          /> */}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default ImageScrollbar;

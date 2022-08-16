import React, { useContext, useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  VStack,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import cardfront from "../assets/images/bg-card-front.png";
import CardContext from "../context/cardContext";

const CardFront = () => {
  const { detail } = useContext(CardContext);
  const { name, cardNumber, data, cvc } = detail;

  const conventZero = (value) => {
    const cardNumberInt = parseInt(value);
    if (cardNumberInt < 10) {
      return `0${value}`;
    } else {
      return value;
    }
  };

  return (
    <>
      <Box
        w={{ base: "286px", xl: "447px" }}
        h={{ base: "156px", xl: "245px" }}
        backgroundRepeat="no-repeat"
        backgroundImage={cardfront}
        backgroundSize={"cover"}
        position={"absolute"}
        zIndex={"20"}
        top={{ base: "50%", xl: "160px" }}
        left={{base:'50%',xl:"160px"}}
        transform={"auto"}
        translateX={{ base: "-50%", xl: "0" }}
      >
        <Flex
          h={"full"}
          px={"8"}
          py={"6"}
          gap={{ base: "42px", xl: "16" }}
          flexDirection={"column"}
        >
          <HStack>
            <Image
              backgroundColor={"brand.neutral.thinviolet"}
              boxSize={{ base: "30px", xl: "48px" }}
              borderRadius="full"
              p={"1"}
            />
            <Image
              backgroundColor={"transparent"}
              border={"1px"}
              borderColor={"brand.neutral.thinviolet"}
              boxSize={"21px"}
              borderRadius="full"
              ml={"4"}
            />
          </HStack>
          <VStack gap={{ base: "0", xl: "6" }} alignItems={"flex-start"}>
            <Heading
              letterSpacing={{ base: "widestless", ml: "widestle" }}
              fontSize={{ base: "lg", xl: "4xl" }}
              color={"brand.neutral.white"}
            >
              {cardNumber ? cardNumber : "0000 0000 0000 0000"}
            </Heading>
            <Flex
              color={"brand.neutral.white"}
              w={"full"}
              justifyContent={"space-between"}
            >
              <Text
                textTransform={"uppercase"}
                fontSize={{ base: "sm", xl: "md" }}
                letterSpacing={"widestle"}
              >
                {name ? name : "Jane Appleseed"}{" "}
              </Text>
              <Text
                fontSize={{ base: "sm", xl: "md" }}
                letterSpacing={"widestle"}
              >
                {data.month && data.year
                  ? `${conventZero(data.month)}/${data.year}`
                  : "00/00"}
              </Text>
            </Flex>
          </VStack>
        </Flex>
      </Box>
    </>
  );
};

export default CardFront;

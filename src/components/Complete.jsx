import React from "react";
import {
  Flex,
  Box,
  Button,
  Image,
  Center,
  Text,
  Heading,
} from "@chakra-ui/react";

import iconComplete from "../assets/images/icon-complete.svg";

const Complete = ({ hanleronclick }) => {
  return (
    <>
      <Center w={"382px"}>
        <Flex
          textAlign={"center"}
          flexDirection={"column"}
          alignItems={"center"}
          w={"full"}
        >
          <Image src={iconComplete} />
          <Box mt={"9"}>
            <Heading
              letterSpacing={"widester"}
              fontSize={"3xl"}
              color={"brand.neutral.verydarkviolet"}
            >
              THANK YOU!
            </Heading>
            <Text
              letterSpacing={"tighter"}
              color={"brand.neutral.darkgrayishviolet"}
              mt={"5"}
              fontSize={"xl"}
            >
              We've added your card details
            </Text>
          </Box>
          <Button
            mt={"12"}
            color={"brand.neutral.white"}
            fontSize={"lg"}
            bgColor={"brand.neutral.verydarkviolet"}
            w={"full"}
            size="lg"
            borderRadius={"xl"}
            _hover={{ bg: "brand.neutral.darkgrayishviolet" }}
            _active={{ bg: "brand.neutral.verydarkviolet" }}
            onClick={hanleronclick}
          >
            Confirm
          </Button>
        </Flex>
      </Center>
    </>
  );
};

export default Complete;

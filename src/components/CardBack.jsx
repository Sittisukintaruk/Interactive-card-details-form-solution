import { Box, Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import cardback from "../assets/images/bg-card-back.png";
import CardContext from "../context/cardContext";

const CardBack = () => {
  const { detail } = useContext(CardContext);
  const { cvc } = detail;

  return (
    <>
      <Box
        w={{ base: "286px", xl: "447px" }}
        h={{ base: "156px", xl: "245px" }}
        backgroundRepeat="no-repeat"
        backgroundImage={cardback}
        position={"absolute"}
        top={{ base: "10%", xl: "450px" }}
        left={{ base: "55%", xl: "250px" }}
        transform={"auto"}
        translateX={{ base: "-50%", xl: "0" }}
        backgroundSize={"cover"}
      >
        <Box
          position={"relative"}
          right={{base:'-25px',xl:"0"}}
          mt={{ base: "64px", xl: "110px" }}
          mb={{ base: "0", xl: "115px" }}
        >
          <Flex
            fontSize={"md"}
            letterSpacing={"widestle"}
            pr={"59px"}
            justifyContent={"flex-end"}
            color={"brand.neutral.white"}
          >
            {cvc ? cvc : "000"}
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default CardBack;

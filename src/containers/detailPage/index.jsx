import React from "react";
import { Container, Flex, Box } from "@chakra-ui/react";
import bgDesktop from "../../assets/images/bg-main-desktop.png";
import Form from "../../components/Form";
import CardFront from "../../components/CardFront";
import CardBack from "../../components/CardBack";

const DetailPage = () => {
  return (
    <Container
      h="sizes.fullscreen"
      padding="0"
      maxW={{ base: "full", xl: "sizes.container.xl" }}
    >
      <Flex flexDirection={{ base: "column", xl: "row" }} h="sizes.full">
        <Container
          maxW={{ base: "full", xl: "sizes.box.desktop" }}
          padding="0"
          centerContent={false}
          position={"relative"}
        >
          <Box
            h={{ base: "240px", xl: "100%" }}
            backgroundImage={bgDesktop}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize={"cover"}
          />
          <CardFront />
          <CardBack />
        </Container>
        <Container mt={{ base: "94px", xl: "0" }} maxW="sizes.full" padding="0">
          <Flex justifyContent={"center"} pt={{ base: "0", xl: "25%" }}>
            <Form />
          </Flex>
        </Container>
      </Flex>
    </Container>
  );
};

export default DetailPage;

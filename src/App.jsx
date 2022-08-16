import DetailPage from "./containers/detailPage";
import { CardProvider } from "./context/cardContext";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./assets/style/theme";

function App() {
  return (
    <>
      <CardProvider>
        <ChakraProvider theme={theme} >
          <DetailPage />
        </ChakraProvider>
      </CardProvider>
    </>
  );
}

export default App;

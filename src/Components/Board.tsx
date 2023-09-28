import { Box, Center } from "@chakra-ui/react";
import Buttons from "./Buttons";
import User from "./User";
import Votes from "./Votes";

const Board = () => {
  return (
    <Center h="100vh" w="100vw">
      <Box border="1.5px solid #44cb70" w="75vw" h="75vh">
        <User />
        <Votes />
        <Buttons />
      </Box>
    </Center>
  );
};

export default Board;

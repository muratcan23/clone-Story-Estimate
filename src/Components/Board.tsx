import { Box, Center } from "@chakra-ui/react";
import Estimation from "./Estimation";
import Points from "./Points";
import RevealAndReset from "./RevealAndReset";
import User from "./User";
import Votes from "./Votes";

const Board = () => {
  return (
    <Center h="100vh" w="100vw">
      <Box border="1.5px solid #44cb70" w="75vw" h="75vh">
        <User />
        <Points />
        <RevealAndReset />

        <Votes voteEntries={[]} />
        <Estimation />
      </Box>
    </Center>
  );
};

export default Board;

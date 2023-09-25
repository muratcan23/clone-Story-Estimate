import { Box, Center, Text } from "@chakra-ui/react";
import User from "./User";
import Votes from "./Votes";

const Board = () => {
  return (
    <Center h="100vh" w="100vw">
      <Box border="1.5px solid #44cb70" w="50vw" h="75vh">
        <User />
        <Votes />
        <Text>Main Board</Text>
      </Box>
    </Center>
  );
};

export default Board;

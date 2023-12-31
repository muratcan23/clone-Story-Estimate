import { Button, Flex } from "@chakra-ui/react";

const RevealAndReset = () => {
  return (
    <Flex m="30px 20px auto 20px" p="5px">
      <Button
        bg="#44cb70"
        h="35px"
        mr="auto"
        textColor="white"
        _hover={{ bg: "#36db70" }}
      >
        Reveal Votes
      </Button>
      <Button
        bg="#6c757d"
        h="35px"
        textColor="white"
        _hover={{ bg: "#585f69" }}
      >
        Reset Estimation
      </Button>
    </Flex>
  );
};

export default RevealAndReset;

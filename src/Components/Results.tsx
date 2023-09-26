import { Center, Flex, HStack, Text } from "@chakra-ui/react";
import ScaleIcon from "./Icons/ScaleIcon";

const Results = () => {
  return (
    <Center>
      <HStack w="95%" h="275px" mt="10px" alignItems="flex-start">
        <Flex border="1px solid black" w="35%" h="100%"></Flex>
        <Flex border="1px solid black" w="50%" h="100%" ml="auto">
          <Flex h="50px" w="100%" bg="#44cb70" alignItems="center">
            <ScaleIcon />
            <Text ml="15px" fontSize="18px" color="white" fontWeight="inherit">
              Estimation Results
            </Text>
          </Flex>
        </Flex>
      </HStack>
    </Center>
  );
};

export default Results;

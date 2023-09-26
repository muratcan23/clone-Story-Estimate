import { Center, Flex, HStack, Text } from "@chakra-ui/react";
import ScaleIcon from "./Icons/ScaleIcon";

const Results = () => {
  return (
    <Center>
      <HStack w="95%" h="275px" mt="10px" alignItems="flex-start">
        <Flex border="1px solid black" w="35%" h="100%"></Flex>

        <Flex
          border="1px solid black"
          w="50%"
          h="100%"
          ml="auto"
          flexDir="column"
        >
          <Flex h="50px" w="100%" bg="#44cb70" alignItems="center">
            <ScaleIcon />
            <Text ml="15px" fontSize="18px" color="white" fontWeight="inherit">
              Estimation Results
            </Text>
          </Flex>

          <Flex>
            <Text
              fontFamily="Open Sans,Helvetica,Arial,sans-serif"
              flexShrink="1rem"
              color="#555"
              fontWeight="400"
              fontSize="16px"
              m="10px auto 0 10px"
            >
              Average -
            </Text>
          </Flex>
          <Flex>
            <Text
              fontFamily="Open Sans,Helvetica,Arial,sans-serif"
              flexShrink="1rem"
              color="#555"
              fontWeight="400"
              fontSize="16px"
              m="10px auto 0 10px"
            >
              Disagreement -
            </Text>
          </Flex>
          <Flex>
            <Text
              fontFamily="Open Sans,Helvetica,Arial,sans-serif"
              fontSize="18px"
              m="10px auto 0 10px"
            >
              Vote Summary
            </Text>
          </Flex>
        </Flex>
      </HStack>
    </Center>
  );
};

export default Results;

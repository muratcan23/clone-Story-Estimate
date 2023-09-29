import { Flex, Text } from "@chakra-ui/react";
import ScaleIcon from "./Icons/ScaleIcon";

const Estimation = () => {
  return (
    <Flex
      borderLeft="1px solid gray"
      borderBottom="1px solid gray"
      borderRight="1px solid gray"
      transition="1"
      w="50%"
      h="100%"
      ml="auto"
      mt="20px"
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
  );
};

export default Estimation;

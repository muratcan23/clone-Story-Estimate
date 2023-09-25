import { Box, Flex, Text } from "@chakra-ui/react";
const POINTS = [0, 1, 2, 3, 4, 5, 8, 13, "?"];

const Votes = () => {
  return (
    <Flex m="15px auto auto 10px">
      {POINTS.map((point) => (
        <Box
          key={point}
          as="button"
          h="32px"
          w="32px"
          borderRadius="5px"
          bg="#6c757d"
          _hover={{ bg: "#585f69" }}
          m="5px 0 auto 14px"
          alignItems="center"
          justifyContent="center"
        >
          <Text color="white" fontSize="16px" fontWeight="semibold">
            {point}
          </Text>
        </Box>
      ))}
    </Flex>
  );
};

export default Votes;

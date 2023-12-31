import { Flex, Text } from "@chakra-ui/react";

type VoteEntry = {
  username: string;
  vote: string;
};

interface VotesProps {
  voteEntries: VoteEntry[];
}

const Votes: React.FC<VotesProps> = ({ voteEntries }) => {
  return (
    <>
      {" "}
      <Flex w="300px" h="275px" flexDir="column" mr="auto">
        {/* Left side */}
        <Flex
          borderTop="0.5px solid gray"
          borderBottom="2px solid gray"
          w="100%"
          h="5vh"
          mt="20px"
        >
          <Text fontSize="14px" fontWeight="bold" fontFamily="inherit">
            Player
          </Text>
          <Text
            fontSize="14px"
            fontWeight="bold"
            fontFamily="inherit"
            ml="40px"
          >
            Voting Status
          </Text>
        </Flex>
        {voteEntries.map((entry) => (
          <Text key={entry.username}>
            {entry.username} : {entry.vote}
          </Text>
        ))}
        <Text>ssss</Text>
      </Flex>
      {/* Right Side */}
      {/* <Flex
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
        </Flex> */}
    </>
  );
};

export default Votes;

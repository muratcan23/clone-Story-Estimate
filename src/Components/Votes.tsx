import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

const POINTS = [0, 1, 2, 3, 4, 5, 8, 13, "?"];

type VoteProps = {};
const Votes: React.FC<VoteProps> = () => {
  const [vote, setVote] = useState<string | null>("");
  const [username, setUsername] = useState<string>("");
  const [voteEntries, setVoteEntries] = useState<
    { username: string; vote: string }[]
  >([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleButtonClick = (buttonValue: string | number) => {
    setVote(buttonValue.toString());
    onOpen();
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleVoteEntry = () => {
    const enteredUsername = username.trim();

    if (enteredUsername !== "") {
      setVoteEntries((prevEntries) => [
        ...prevEntries,
        { username: enteredUsername, vote: vote || "" },
      ]);

      setUsername("");
      onClose();
    } else {
      onOpen();
    }
  };

  return (
    <Flex m="15px auto auto 10px">
      {
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              <Alert
                status="error"
                variant="subtle"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                height="100%"
              >
                <AlertIcon boxSize="40px" mr={0} />
                <AlertTitle m="5px" fontSize="18px">
                  You must enter a valid username
                </AlertTitle>
                <Input
                  bg="white"
                  placeholder="Enter username plz"
                  value={username}
                  onChange={handleUsernameChange}
                  m="4px"
                />
                <Button colorScheme="green" onClick={handleVoteEntry} mt="5px">
                  Submit
                </Button>
              </Alert>
            </ModalBody>
          </ModalContent>
        </Modal>
      }
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
          onClick={() => handleButtonClick(point)}
        >
          <Text color="white" fontSize="16px" fontWeight="semibold">
            {point}
          </Text>
        </Box>
      ))}
      {isOpen && (
        <Alert status="error" mt="15px" width="100%">
          <AlertIcon />
          <AlertTitle>Error!</AlertTitle>
          <AlertDescription>Please enter a valid username.</AlertDescription>
        </Alert>
      )}

      {/* tempororay  displaying entered votes */}
      <Flex ml="auto" mr="10px">
        <Box bg="tomato">
          {voteEntries.map((entry, index) => (
            <li key={index}>
              {entry.username}= {entry.vote}
            </li>
          ))}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Votes;

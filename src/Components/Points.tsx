import {
  Box,
  Button,
  Center,
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
type VoteEntry = {
  username: string;
  vote: string;
};

type PointsProps = {};
const Points: React.FC<PointsProps> = () => {
  const [vote, setVote] = useState<string | null>("");
  const [username, setUsername] = useState<string>("");
  const [voteEntries, setVoteEntries] = useState<VoteEntry[]>([]);

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
          <ModalContent h="175px">
            <ModalBody
              alignItems="center"
              justifyContent="center"
              bg="gray.100"
            >
              <Input
                bg="white"
                placeholder="Enter username plz"
                value={username}
                onChange={handleUsernameChange}
                m="4px"
                alignItems="center"
                justifyContent="center"
              />
              <Flex
                bg="red"
                borderRadius="10px"
                h="35px"
                border="1px solid black"
                m="5px"
              >
                <Text fontSize="20px" justifyContent="center" ml="50px">
                  You must enter a valid username !
                </Text>
              </Flex>
              <Center m="10px">
                <Button colorScheme="green" onClick={handleVoteEntry} mt="5px">
                  Submit
                </Button>
              </Center>
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

export default Points;

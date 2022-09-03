import {
  Box,
  CloseButton,
  Container,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

import { useState } from "react";
import { SlideFade } from "@chakra-ui/react";
import "./App.css";
import Evenodd from "./components/evenodd";
import Palindrome from "./components/palindrome";
import Prime from "./components/prime";

function App() {
  const toast = useToast();
  const { isOpen, onToggle } = useDisclosure();
  const [error, seterror] = useState(false);
  const [errormessage, seterrormessage] = useState("");
  const [output, setoutput] = useState("");
  function handlepalindrome(p) {
    if (p === "error") {
      seterrormessage(
        "Please enter a string to check if it is a palindrome string or not."
      );
      seterror(true);
    } else {
      if (p) {
        setoutput(`${input} is a Palindrome String.`);
        if (isOpen) {
        } else {
          onToggle();
        }
        seterror(false);
      } else {
        setoutput(`${input} is not a Palindrome String.`);
        if (isOpen) {
        } else {
          onToggle();
        }
        seterror(false);
      }
    }
  }

  function handleeven(even) {
    if (even === "error") {
      if (input === "") {
        seterrormessage(
          "Please enter a number to check if it is a Even or Odd number!"
        );
        seterror(true);
      } else {
        seterrormessage(`Whoops! ${input} is not a number!`);
        seterror(true);
      }
    } else {
      if (even) {
        setoutput(`${input} is a Even Number.`);
        if (isOpen) {
        } else {
          onToggle();
        }
        seterror(false);
      } else {
        setoutput(`${input} is a Odd Number.`);
        if (isOpen) {
        } else {
          onToggle();
        }
        seterror(false);
      }
    }
  }

  function handleprime(prime) {
    if (prime === "error") {
      if (input === "") {
        seterrormessage(
          "Please enter a number to check if it is a prime number or not!"
        );
        seterror(true);
      } else {
        seterrormessage(`Whoops! ${input} is not a number!`);
        seterror(true);
      }
    } else {
      if (parseInt(input) === 1) {
        setoutput(`1 is neither prime nor a composite number`);
        if (isOpen) {
        } else {
          onToggle();
        }
        seterror(false);
      } else if (parseInt(input) < 1) {
        toast({
          title: `Please enter a positive number.`,
          status: "error",
          isClosable: true,
          position: "top",
        });
        seterror(false);
      } else if (prime) {
        setoutput(`${input} is a Prime Number.`);
        if (isOpen) {
        } else {
          onToggle();
        }
        seterror(false);
      } else {
        setoutput(`${input} is not a Prime Number.`);
        if (isOpen) {
        } else {
          onToggle();
        }
        seterror(false);
      }
    }
  }
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);

    seterror(false);
  };

  return (
    <>
      <Box id="img" h="100vh" w="100vw">
        <Container pt="120px">
          <Heading color="teal.500" mb={10}>
            Even/Odd, Prime Number, Palindrome String Checker
          </Heading>
          <FormControl isInvalid={error}>
            <FormLabel color="teal.800">
              Enter a number/string to check whether it is Even/Odd or Prime
              number or Palindrome string.
            </FormLabel>
            <Input
              placeholder="Input"
              type="text"
              value={input}
              onChange={handleInputChange}
            />
            {!error ? (
              <FormHelperText>
                Note: String can contain alphabets, numbers and special
                characters. <br /> Example: "#@1wow1@#" is valid string.
              </FormHelperText>
            ) : (
              <FormErrorMessage>{errormessage}</FormErrorMessage>
            )}
            <Box mt="30px">
              <Evenodd
                iseven={handleeven}
                number={
                  /[a-zA-Z]/.test(input) ? parseInt("lol") : parseInt(input)
                }
              />{" "}
              <Prime
                isprime={handleprime}
                number={
                  /[a-zA-Z]/.test(input) ? parseInt("lol") : parseInt(input)
                }
              />{" "}
              <Palindrome ispalindrome={handlepalindrome} input={input} />
            </Box>
            <SlideFade in={isOpen} offsetY="20px">
              <Box
                p="40px"
                color="white"
                mt="4"
                bg="teal.500"
                rounded="md"
                shadow="md"
                id="output"
              >
                <CloseButton id="close" onClick={onToggle} />
                <strong>Output:</strong> <br />
                {output}
              </Box>
            </SlideFade>
          </FormControl>
        </Container>
      </Box>
    </>
  );
}

export default App;

import {
  Box,
  Container,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import Evenodd from "./components/evenodd";
import Palindrome from "./components/palindrome";
import Prime from "./components/prime";

function App() {
  const toast = useToast();
  const [error, seterror] = useState(false);
  const [errormessage, seterrormessage] = useState("");
  function handlepalindrome(p) {
    if (p === "error") {
      seterrormessage(
        "Please enter a string to check if it is a palindrome string or not."
      );
      seterror(true);
    } else {
      if (p) {
        toast({
          title: `${input} is a Palindrome String.`,
          status: "success",
          isClosable: true,
          position: "top",
        });
        seterror(false);
      } else {
        toast({
          title: `${input} is not a Palindrome String.`,
          status: "error",
          isClosable: true,
          position: "top",
        });
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
        toast({
          title: `${input} is a Even Number.`,
          status: "info",
          isClosable: true,
          position: "top",
        });
        seterror(false);
      } else {
        toast({
          title: `${input} is a Odd Number.`,
          status: "info",
          isClosable: true,
          position: "top",
        });
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
        toast({
          title: `1 is neither prime nor a composite number`,
          status: "info",
          isClosable: true,
          position: "top",
        });
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
        toast({
          title: `${input} is a Prime Number.`,
          status: "success",
          isClosable: true,
          position: "top",
        });
        seterror(false);
      } else {
        toast({
          title: `${input} is not a Prime Number.`,
          status: "error",
          isClosable: true,
          position: "top",
        });
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
      <Container pt="120px">
        <FormControl isInvalid={error}>
          <FormLabel>
            Enter a number/string to check whether it is Even/Odd or Prime
            number or Palindrome string.
          </FormLabel>
          <Input type="text" value={input} onChange={handleInputChange} />
          {!error ? (
            <FormHelperText>
              Note: String can contain alphabets, numbers and special
              characters. <br /> Example: "#@1wow1@#" is valid string.
            </FormHelperText>
          ) : (
            <FormErrorMessage>{errormessage}</FormErrorMessage>
          )}
          <Box mt="10px">
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
        </FormControl>
      </Container>
    </>
  );
}

export default App;

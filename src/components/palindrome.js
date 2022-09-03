import { Button } from "@chakra-ui/react";
import React from "react";
import PropTypes from "prop-types";

function Palindrome(props) {
  function handleclick() {
    if (props.input === "") {
      props.ispalindrome("error");
    } else {
      const len = props.input.length;

      for (let i = 0; i < len / 2; i++) {
        if (props.input[i] !== props.input[len - 1 - i]) {
          return props.ispalindrome(false);
        }
      }
      return props.ispalindrome(true);
    }
  }
  return (
    <Button onClick={handleclick} mb="5px" colorScheme="blue">
      Palindrome String
    </Button>
  );
}
Palindrome.propTypes = {
  string: PropTypes.string,
};

export default Palindrome;

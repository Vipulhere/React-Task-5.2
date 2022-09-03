import { Button } from "@chakra-ui/react";
import React from "react";
import PropTypes from "prop-types";
function Prime(props) {
  function handleclick() {
    if (isNaN(props.number)) {
      props.isprime("error");
    } else {
      let isPrime = true;

      if (props.number > 1) {
        for (let i = 2; i < props.number; i++) {
          if (props.number % i === 0) {
            isPrime = false;
            break;
          }
        }

        if (isPrime) {
          props.isprime(true);
        } else {
          props.isprime(false);
        }
      } else {
        props.isprime();
      }
    }
  }
  return (
    <Button onClick={handleclick} mb="5px" colorScheme="blue">
      Prime Number
    </Button>
  );
}

Prime.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Prime;

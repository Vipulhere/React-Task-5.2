import { Button } from "@chakra-ui/react";
import React from "react";
import PropTypes from "prop-types";
function Evenodd(props) {
  function handleclick() {
    if (isNaN(props.number)) {
      props.iseven("error");
    } else {
      if (props.number % 2 === 0) {
        props.iseven(true);
      } else {
        props.iseven(false);
      }
    }
  }
  return (
    <Button onClick={handleclick} mb="5px" colorScheme="teal" variant="outline">
      Even/Odd
    </Button>
  );
}

Evenodd.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Evenodd;

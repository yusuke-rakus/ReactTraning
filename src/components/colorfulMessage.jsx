import React from "react";

const ColorfulMessage = (props) => {
  const { selfcolor, message } = props;
  const boy = {
    color: selfcolor,
  };

  return <p style={boy}>{message}</p>;
};

export default ColorfulMessage;

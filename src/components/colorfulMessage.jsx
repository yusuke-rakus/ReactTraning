import React from "react";

const ColorfulMessage = (props) => {
  // 変数を一括で取り込み
  const { selfcolor, message } = props;
  const boy = {
    color: selfcolor,
    // color: props.selfcolor でも可能
  };

  return <p style={boy}>{message}</p>;
};

export default ColorfulMessage;

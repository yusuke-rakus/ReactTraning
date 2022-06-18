import React from "react";

const ColorfulMessage = (props) => {
  // 変数を一括で取り込み
  const { selfcolor, message } = props;
  const humanStyle = {
    color: selfcolor,
    // color: props.selfcolor でも可能
  };

  return <p style={humanStyle}>{message}</p>;
};

export default ColorfulMessage;

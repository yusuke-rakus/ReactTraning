import React from "react";
import ColorfulMessage from "./components/colorfulMessage";

const App = () => {
  const clickButton = () => {
    alert("本当に登録しますか");
  };

  const girl = {
    color: "red",
    fontWeight: "bold",
  };

  return (
    <>
      <h2>Hej</h2>

      <ColorfulMessage selfcolor="blue" message="こんにちは" />
      <ColorfulMessage selfcolor="red" message="こんにちは" />

      <button onClick={clickButton}>Button</button>
    </>
  );
};
export default App;

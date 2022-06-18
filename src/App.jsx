import React, { useState } from "react";
import ColorfulMessage from "./components/colorfulMessage";

const App = () => {
  // useStateでデフォルト値を設定し、setterとタグ内のフィールド名をきめられる
  const [num, setNum] = useState(0);

  const [faceflg, setfaceflg] = useState("(ー▽ー)");

  const [faceShowFlg, setFaceShowFlg] = useState(true);

  const clickButton = () => {
    // useStateで定義したsetter名
    setNum(num + 1);
    if ((num + 1) % 3 == 0) {
      setfaceflg("ｷﾀ━━━━(ﾟ∀ﾟ)━━━━!!");
    } else {
      setfaceflg("(ー▽ー)");
    }
  };

  const changeFaceButton = () => {
    if (faceflg == "(ー▽ー)") {
      setfaceflg("ｷﾀ━━━━(ﾟ∀ﾟ)━━━━!!");
    } else {
      setfaceflg("(ー▽ー)");
    }
  };

  const setFaceShowFlgButton = () => {
    if (faceShowFlg) {
      setFaceShowFlg(false);
    } else {
      setFaceShowFlg(true);
    }
  };

  return (
    <>
      <h2>Hej</h2>

      {/* クラス名のタグを使用することで該当クラスのJSXが読み込み可能となる */}
      <ColorfulMessage selfcolor="blue" message="こんにちは" />
      <ColorfulMessage selfcolor="red" message="こんにちは" />

      <p>{num}</p>
      <button onClick={clickButton}>Button</button>

      <p>{faceflg}</p>
      <button onClick={changeFaceButton}>顔文字</button>

      <p>{faceShowFlg && <span>(*´ω｀*)</span>}</p>
      <button onClick={setFaceShowFlgButton}>Button</button>
    </>
  );
};
export default App;

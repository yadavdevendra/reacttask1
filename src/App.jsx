import React, { useState } from "react";
import "./App.css";
import { Prectice } from "./components/Prectice";
import { Propschange } from "./components/Propschange";

function App() {
  const [data, setData] = useState("devendra");

  function func(changedName = "") {
    console.log("changedName", changedName);
    setData(changedName)
  }
  return (
    <div className="App">
      <Prectice />
      <Propschange data={data} func={func} />
      {/* <button onClick={() => setData("yadav")}>click</button> */}
    </div>
  );
}

export default App;

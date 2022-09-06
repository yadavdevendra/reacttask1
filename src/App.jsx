import React, { useState } from "react";
import "./App.css";
import { Prectice } from "./components/Prectice";
import { Propschange } from "./components/Propschange";

function App() {
  const [data, setData] = useState("devendra");

  return (
    <div className="App">
      <Prectice />
      <Propschange data={data} />
      <button onClick={() => setData("yadav")}>click</button>
    </div>
  );
}

export default App;

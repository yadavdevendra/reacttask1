import React from "react";

export const Propschange = (props) => {
  function changeName(name) {
    props.func(name);
  }
  return (
    <div>
      <h1>{props.data} Hello</h1>
      <button
        onClick={() => {
          changeName("abbas");
        }}
      >
        TWO
      </button>
    </div>
  );
};

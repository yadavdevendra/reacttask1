import React, { useState } from "react";

export const Prectice = () => {
  const [value, setValue] = useState(0);

  function handlechange(text) {
    setValue(text);
  }

  return (
    <div>
      <input
        disabled={value > 2}
        onChange={(e) => handlechange(e.target.value)}
      />
      <button onClick={() => setValue(true)}>click</button>
    </div>
  );
};

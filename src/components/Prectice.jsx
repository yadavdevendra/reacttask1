import React, { useState } from "react";

export const Prectice = () => {
  const [value, setValue] = useState(false);
  function handlechange(text) {
    if (text >=2 || text.length >=2) {
      setValue(true)
    }
  }
  return (
    <div>
    
      <input
        disabled={value ? true : false}
        onChange={(e) => handlechange(e.target.value)}
      />
      <button onClick={()=>setValue(false)}>click</button>
    </div>
  );
};


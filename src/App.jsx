import React, { useState } from "react";
import Buttons from "./components/Buttons";

function App() {
  const [value, setValue] = useState("");

  const handleClick = (text) => {
    if (text === "=") {
      try {
        setValue(String(eval(value)));
      } catch {
        setValue("Error");
      }
      return;
    }

    if (text === "AC") {
      setValue("");
      return;
    }

    if (text === "DEL") {
      setValue(value.slice(0, -1));
      return;
    }

    setValue(value + text);
  };

  return (
    <div className="calculator">
      <input type="text" value={value} readOnly />

      <Buttons handleClick={handleClick} />
      
      
    </div>
  );
}

export default App;

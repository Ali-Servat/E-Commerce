import React, { ChangeEventHandler, useState } from "react";

const useInput = () => {
  const [input, setInput] = useState("");

  const handleChange: ChangeEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInput((e.target as HTMLInputElement).value);
  };

  return { input, handleChange };
};

export default useInput;

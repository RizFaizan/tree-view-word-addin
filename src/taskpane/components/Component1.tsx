/* eslint-disable react/no-unescaped-entities */
import React from "react";

interface appProp {
  state1: string;
  age: number;
}

const Component1: React.FC<appProp> = ({ state1, age }) => {
  return (
    <>
      <h3>
        Hello, my name is {state1}. And I'm {age} years old.
      </h3>
    </>
  );
};

export default Component1;

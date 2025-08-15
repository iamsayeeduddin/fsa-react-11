import React from "react";
import Name from "./Name";
import Counter from "./Counter";

const HomePage = () => {
  console.log("HomePage");
  return (
    <div>
      <Name name="Ahmed" />
      <Name />
      <Counter />
    </div>
  );
};

export default HomePage;

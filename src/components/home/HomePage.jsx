import React from "react";
import Name from "./Name";
import Counter from "./Counter";
import UserList from "./UserList";
import Conditional from "./Conditional";

const HomePage = () => {
  console.log("HomePage");
  return (
    <div>
      <Name name="Ahmed" />
      <Name />
      <Counter />
      <UserList />
      <Conditional />
    </div>
  );
};

export default HomePage;

import React from "react";
import Name from "./Name";
import Counter from "./Counter";
import UserList from "./UserList";

const HomePage = () => {
  console.log("HomePage");
  return (
    <div>
      <Name name="Ahmed" />
      <Name />
      <Counter />
      <UserList />
    </div>
  );
};

export default HomePage;

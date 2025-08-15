const Name = (props) => {
  console.log("Name");

  return (
    <>
      {/* <p>Welcome {props.name ? props.name : "User"}!</p> */}
      <p>Welcome {props.name || "User"}!</p>
    </>
  );
};

export default Name;

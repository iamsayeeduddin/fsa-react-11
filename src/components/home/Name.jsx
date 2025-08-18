import styles from "../../assets/Name.module.css"

const Name = (props) => {
  console.log("Name");

  return (
    <>
      {/* <p>Welcome {props.name ? props.name : "User"}!</p> */}
      <div className={styles.someFont} style={{backgroundColor: "yellow"}}>
        <p className="nameTxt text-lg">Welcome {props.name || "User"}!</p>
      </div>
    </>
  );
};

export default Name;

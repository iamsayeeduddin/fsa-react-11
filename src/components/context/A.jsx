import React, { useState, createContext, useContext } from "react";

const ValContext = createContext();

const A = () => {
  const [value, setValue] = useState(10);
  return (
    <ValContext.Provider value={value}>
      <div>
        <B value={value} />
        {/* <B value={value} /> */}
      </div>
      //{" "}
    </ValContext.Provider>
  );
};

export default A;

const B = (props) => {
  //   const { value } = props;
  return (
    <div>
      {/* <C value={value} /> */}
      <C />
    </div>
  );
};

const C = (props) => {
  const { value } = props;
  return (
    <div>
      <D />
    </div>
  );
};

const D = (props) => {
  //   const { value } = props;
  const value = useContext(ValContext);
  return <div className="text-9xl">{value}</div>;
};

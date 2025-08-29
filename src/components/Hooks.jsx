import React, { useCallback, useMemo, useRef, useState } from "react";

const Hooks = (props) => {
  const value = useRef();
  const btnRef = useRef(null);
  const [val, setVal] = useState("");

  const handleClick = useCallback(
    (val) => {
      setVal(val ? val : "testing");
    },
    [setVal]
  );

  const handleClickRef = () => {
    value.current = 10000;
  };

  const count = useMemo(() => {
    return props?.a + 2;
  }, [props?.a]);

  console.log(val, value);
  return (
    <>
      <div className="flex gap-5">
        {val}
        <button
          type="button"
          ref={btnRef}
          onClick={handleClick}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center sadasdasd:bg-blue-600 sadasdasd:hover:bg-blue-700 sadasdasd:focus:ring-blue-800"
        >
          State
        </button>
        <button
          type="button"
          onClick={handleClickRef}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center sadasdasd:bg-blue-600 sadasdasd:hover:bg-blue-700 sadasdasd:focus:ring-blue-800"
        >
          Ref
        </button>
        {value.current}
        <button
          type="button"
          onClick={() => btnRef.current?.click()}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center sadasdasd:bg-blue-600 sadasdasd:hover:bg-blue-700 sadasdasd:focus:ring-blue-800"
        >
          Focus on Ref
        </button>
      </div>
      <Child val={val} setVal={handleClick} />
    </>
  );
};

export default Hooks;

const Child = (props) => {
  return (
    <button
      type="button"
      onClick={() => props.setVal("From Child")}
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center sadasdasd:bg-blue-600 sadasdasd:hover:bg-blue-700 sadasdasd:focus:ring-blue-800"
    >
      Update State
    </button>
  );
};

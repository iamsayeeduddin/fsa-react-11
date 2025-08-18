import React, { useState } from "react";

const Conditional = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <>
      <h2>Conditional Rendering</h2>
      <div>
        {isLoggedIn ? (
          <p>Welcome User!</p>
        ) : (
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={handleLogin}
          >
            Login
          </button>
        )}
      </div>
    </>
  );
};

export default Conditional;

import { useState } from "react";
import FormPage from "./components/form/FormPage";
import DynamicUserList from "./components/home/DynamicUserList";
import HomePage from "./components/home/HomePage";

function App() {
  const [showDynamicUsers, setShowDynamicUsers] = useState(false)
  return (
    <div className="m-4">
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => setShowDynamicUsers(!showDynamicUsers)}
      >
        Show Users
      </button>
      {/* <HomePage /> */}
      {/* <FormPage /> */}
      {showDynamicUsers ? <DynamicUserList /> : null}
    </div>
  );
}

export default App;

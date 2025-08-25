// import { useEffect, useState } from "react";
// function App() {
//   const [showDynamicUsers, setShowDynamicUsers] = useState(false);
//   // const [page, setPage] = useState("homepage");

//   // useEffect(() => {
//   //   if (location.pathname.includes("form")) {
//   //     setPage("form");
//   //   } else if (location.pathname.includes("todo")) {
//   //     setPage("todo");
//   //   } else {
//   //     setPage("homepage");
//   //   }
//   //   console.log(location);
//   // }, [location]);

//   return (
//     <div className="m-4">
//       <ul className="flex gap-6 mb-10">
//         <li>
//           <a href="/">Homepage</a>
//         </li>
//         <li>
//           <a href="/form">Form</a>
//         </li>
//         <li>
//           <a href="/todo">Todo List</a>
//         </li>
//       </ul>
//       <button
//         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
//         onClick={() => setShowDynamicUsers(!showDynamicUsers)}
//       >
//         Show Users
//       </button>
//       {page === "homepage" ? <HomePage /> : null}
//       {page === "form" ? <FormPage /> : null}
//       {showDynamicUsers ? <DynamicUserList /> : null}
//       {page === "todo" ? <TodoPage /> : null}
//     </div>
//   );
// }

// export default App;

import React from "react";
import HomePage from "./components/home/HomePage";
import { Link, Route, Routes } from "react-router-dom";
import FormPage from "./components/form/FormPage";
import DynamicUserList from "./components/home/DynamicUserList";
import TodoPage from "./components/todo/TodoPage";
import UserList from "./components/home/UserList";
import Hoc from "./components/home/Hoc";
import UserProfile from "./components/home/UserProfile";

const App = () => {
  return (
    <div>
      <ul className="flex gap-6 m-10">
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <Link to="/todo">Todo List</Link>
        </li>
        <li>
          <Link to="/users/static">Static Users</Link>
        </li>
        <li>
          <Link to="/users/dynamic">Users</Link>
        </li>
      </ul>
      <Hoc>
        <p>HOC TEXT</p>
        <span>Testing</span>
      </Hoc>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/users">
          <Route path="dynamic" element={<DynamicUserList />} />
          <Route path="static" element={<UserList />} />
          <Route path=":username" element={<UserProfile />} />
          {/* http://localhost:5173/users/iamsayeeduddin */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;

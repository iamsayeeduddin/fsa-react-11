import React, { useState } from "react";

const UserList = () => {
  const [isFilter, setIsFilter] = useState(false);
  const users = [
    { id: 1, name: "Alice", email: "", age: 25 },
    { id: 2, name: "Bob", email: "bob@example.com", age: 30 },
    { id: 3, name: "Charlie", email: "charlie@example.com", age: 28 },
    { id: 4, name: "David", email: "david@example.com", age: 22 },
    { id: 5, name: "Eve", email: "eve@example.com", age: 27 },
    { id: 6, name: "Frank", email: "frank@example.com", age: 35 },
    { id: 7, name: "Grace", email: "grace@example.com", age: 24 },
    { id: 8, name: "Heidi", email: "heidi@example.com", age: 29 },
    { id: 9, name: "Ivan", email: "ivan@example.com", age: 31 },
    { id: 10, name: "Judy", email: "judy@example.com", age: 26 },
  ];

  const filter = () => {
    setIsFilter(!isFilter);
  };
  return (
    <div>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={filter}
      >
        Filter under 25
      </button>
      <span>Is Filter On: {isFilter ? "Yes" : "No"}</span>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Age
              </th>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((val) => (isFilter ? val.age <= 25 : true))
              .map((val, idx) => (
                <tr key={idx + val.name} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {val.name}
                  </th>
                  <td className="px-6 py-4">{val.email || "NA"}</td>
                  <td className="px-6 py-4">{val.age}</td>
                  <td className="px-6 py-4">{val.id}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;

import React, { useState } from "react";

const FormPage = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleInputChange = (e) => {
    let fieldKey = e.target.name;
    let val = fieldKey === "remember" ? e.target.checked : e.target.value;

    setFormValues({
      ...formValues,
      [fieldKey]: val,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <div>
      <form class="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900">
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 sadasdasd:bg-gray-700 sadasdasd:border-gray-600 sadasdasd:placeholder-gray-400 sadasdasd:text-white sadasdasd:focus:ring-blue-500 sadasdasd:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div class="mb-5">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 sadasdasd:text-white">
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 sadasdasd:bg-gray-700 sadasdasd:border-gray-600 sadasdasd:placeholder-gray-400 sadasdasd:text-white sadasdasd:focus:ring-blue-500 sadasdasd:focus:border-blue-500"
            required
          />
        </div>
        <div class="flex items-start mb-5">
          <div class="flex items-center h-5">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              checked={formValues.remember}
              onChange={handleInputChange}
              class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 sadasdasd:bg-gray-700 sadasdasd:border-gray-600 sadasdasd:focus:ring-blue-600 sadasdasd:ring-offset-gray-800 sadasdasd:focus:ring-offset-gray-800"
            />
          </div>
          <label for="remember" class="ms-2 text-sm font-medium text-gray-900 sadasdasd:text-gray-300">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center sadasdasd:bg-blue-600 sadasdasd:hover:bg-blue-700 sadasdasd:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPage;

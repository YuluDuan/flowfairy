import React from "react";

const CreateButton = () => {
  return (
    <form>
      <button
        type="submit"
        className="w-full text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none font-large rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
      >
        Create New
      </button>
    </form>
  );
};

export default CreateButton;

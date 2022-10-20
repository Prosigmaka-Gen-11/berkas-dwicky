import React, { useState } from "react";

export const UbahWarna = () => {
  const [isActive, setActive] = useState(false);

  const togglerHandler = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div
        className={
          isActive
            ? "container my-2 mx-auto p-4 rounded-lg bg-green-500 flex flex-col items-center "
            : "container my-2 mx-auto p-4 rounded-lg bg-orange-500 flex flex-col items-center "
        }
      >
        <h1 className="text-white font-bold text-3xl">Let's Change Color</h1>

        <button
          className="px-5 py-2.5 mr-2 mb-2 mt-4 bg-black rounded-lg font-bold text-white"
          onClick={togglerHandler}
        >
          Click Me
        </button>
      </div>
    </>
  );
};

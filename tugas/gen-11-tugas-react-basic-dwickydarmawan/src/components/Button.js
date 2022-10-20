import React from "react";

export default function Button(props) {
  return (
    <>
      <div className="flex justify-center m-5">
        <button
          type="button"
          onClick={props.handleClick}
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 text-center"
        >
          {props.buttonName}
        </button>
      </div>
    </>
  );
}

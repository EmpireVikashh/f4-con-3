import React from "react";

const SelectedItems = () => {
  return (
    <div className="items flex flex-wrap justify-center">
      Click to Select
      {Array(0)
        .fill(null)
        .map((_, index) => (
          <div key={index} className="bg-lime-600 p-4 m-1 text-center hover:bg-red-500"></div>
        ))}
    </div>
  );
};

export default SelectedItems;

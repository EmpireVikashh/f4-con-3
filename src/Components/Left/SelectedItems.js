import React from "react";
import { useData } from "../Utils/Context";

const SelectedItems = () => {
  const { clickItems } = useData();

  return (
    <div className="items flex flex-wrap justify-center">
      {clickItems.length < 1 ? (
        <p>Click to Select</p>
      ) : (
        clickItems.map((item) => (
          <div
            key={item}
            className="bg-lime-600 p-4 m-1 text-center hover:bg-red-500"
          >
            {item}
          </div>
        ))
      )}
    </div>
  );
};

export default SelectedItems;

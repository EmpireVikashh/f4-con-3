import React, { useState } from "react";
import SelectedItems from "./SelectedItems";

const LeftSection = () => {
  const sizes = ["10x10", "20x20", "30x30", "40x40"];
  const arrSize = [10,20,30,40];
  const [selectedContainer, setSelectedContainer] = useState(sizes);
  const [containerSize, setSContainerSize] = useState(10);

  const handleSelectedContainer = (size,arraySize) => {
    setSelectedContainer(size ? [size] : sizes);
    setSContainerSize(arraySize)
    // console.log(size ? size + " True" : size + " false");
  };
  console.log(containerSize);
  return (
    <section className="leftSection border-2 border-red-200 rounded-md w-64 p-1 h-[96vh] overflow-hidden hover:overflow-auto">
      <h1 className=" bg-slate-400 p-2 text-center rounded-md">
        Available Container
      </h1>
      <h2
        className=" bg-green-700 p-2 text-center rounded-full mt-2 hover:bg-red-600 cursor-pointer"
        onClick={()=>handleSelectedContainer(false)}
      >
        Show All Containers
      </h2>
      <div className="availableContainers px-1">
        {selectedContainer.map((size, idx) => (
          <div
            key={size}
            className="containers bg-yellow-600 mt-2 rounded-md cursor-pointer hover:brightness-90 hover:bg-green-500"
            onClick={() => handleSelectedContainer(size,arrSize[idx])}
          >
            <h1 className="font-semibold bg-red-300 border border-blue-500 text-center">
              {size}
            </h1>
            <div className="items p-6">
              <SelectedItems />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeftSection;

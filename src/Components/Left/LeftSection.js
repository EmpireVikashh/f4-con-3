import React, { useState } from "react";
import SelectedItems from "./SelectedItems";
import { useData } from "../Utils/Context";

const LeftSection = () => {
  const sizes = ["2", "3", "4","5"];
  // const containerCapacity = [2, 3, 4, 5];
  const [selectedContainer, setSelectedContainer] = useState(sizes);
  const {setSContainerSize } = useData();
  const { setSelectContainer } = useData();

  const handleSelectedContainer = (size) => {
    setSelectedContainer(size ? [size] : sizes);
    setSelectContainer(size ? [size] : 2);
    setSContainerSize(+size);
    // size ? window.alert("Container selected Successfully!!") : console.log("null");
  };
  // console.log(containerSize);
  return (
    <section className="leftSection border-2 border-red-200 rounded-md w-64 p-1 h-[96vh] overflow-hidden hover:overflow-auto">
      <h1 className=" bg-slate-400 p-2 text-center rounded-md">
        Available Container
      </h1>
      <h2
        className=" bg-green-700 p-2 text-center rounded-full mt-2 hover:bg-red-600 cursor-pointer"
        onClick={() => handleSelectedContainer(false)}
      >
        Show All Containers
      </h2>
      <div className="availableContainers px-1">
        {selectedContainer.map((size) => (
          <div
            key={size}
            className="containers bg-yellow-600 mt-2 rounded-md cursor-pointer hover:brightness-90 hover:bg-green-500"
            onClick={() =>
              handleSelectedContainer(size)
            }
          >
            <h1 className="font-semibold bg-red-300 border border-blue-500 text-center text-black">
              {size} item Capacity
            </h1>
            <div className="items p-3">
              <SelectedItems />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeftSection;

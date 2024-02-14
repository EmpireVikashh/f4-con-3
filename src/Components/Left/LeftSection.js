import React, { useState } from "react";
import SelectedItems from "./SelectedItems";
import { useData } from "../Utils/Context";

const LeftSection = () => {
  const boxSizes = ["5", "10", "14", "20"];
  const [selectedContainer, setSelectedContainer] = useState(boxSizes);
  const { setSelectContainer } = useData();
  const { setSContainerSize } = useData();

  const handleSelectedContainer = (size) => {
    // console.log(size);
    setSelectedContainer(size ? [+size] : boxSizes);

    setSelectContainer(size ? [size] : 2);
    setSContainerSize(+size);
  };

  // console.log(selectedContainer);
  return (
    <section className="leftSection border-2 border-red-200 rounded-md w-2/3 p-1 h-[96vh] overflow-hidden hover:overflow-auto">
      <h1 className=" bg-slate-400 p-2 text-center rounded-md">
        Available Container
      </h1>
      <h2
        className=" bg-green-700 p-2 text-center rounded-full mt-2 hover:bg-red-600 cursor-pointer"
        onClick={() => handleSelectedContainer(false)}
      >
        Show All Containers
      </h2>
      <div className="availableContainers px-1 flex flex-wrap justify-center">
        {selectedContainer.map((size) => (
          <div
            key={size}
            className="containers bg-yellow-600 mt-2 rounded-md cursor-pointer hover:brightness-90 hover:bg-green-500 w-72 m-1"
            onClick={() => handleSelectedContainer(size)}
          >
            <h1 className="font-semibold bg-red-300 border border-blue-500 text-center text-black">
              {size} item Capacity
            </h1>
           <div className="items p-3">
              <SelectedItems />
            </div>
          </div>
        ))
         
        }
      </div>
    </section>
  );
};

export default LeftSection;

import React, { useEffect, useState } from "react";
import { useData } from "../Utils/Context";

const RightSection = () => {
  const items = [
    "Croissant",
    "Baguette",
    "Cinnamon Roll",
    "Chocolate Cake",
    "Macarons",
    "Cheesecake",
    "Sourdough Bread",
    "Eclair",
    "Danish Pastry",
    "Cupcake",
  ];
  const { clickItems, setClickItems } = useData();
  const [currSize, setCurrSize] = useState(0);
  const { selectContainer } = useData();
  const { containerSize } = useData();
  // console.log(containerSize, currSize, clickItems,selectContainer);
  useEffect(() => {
    const remainSize = containerSize - currSize ;
    // console.log(remainSize, " remain");
    if (currSize > containerSize) {
      window.confirm(`Select item which is less than or equal to ${remainSize} size of item!!`);
      return;
    }
  }, [currSize]);

  const handleSetItems = (item, idx) => {
    if (currSize < containerSize) {
      setCurrSize((currSize) => currSize + (idx + 1));
      const newItems = [...clickItems, item];
      selectContainer !== 2
        ? setClickItems(newItems)
        : window.alert("Please select Container");
    }
    else{
      window.confirm("Your container has been full!!");
    }
    // Set the new array as the new state
  };
  // console.log(currSize, "curr size");

  return (
    <section className="rightSection border-2 border-red-200 rounded-md  w-[35rem] p-1">
      <h1 className=" bg-slate-400 p-2 text-center">Available Items</h1>
      <div className="availableItems p-1 flex flex-wrap justify-center">
        {items.map((item, idx) => (
          <div
            key={item}
            className="containers bg-yellow-600 w-52 m-2 rounded-md cursor-pointer hover:bg-green-500"
            onClick={() => handleSetItems(item, idx)}
          >
            <h1 className="font-semibold bg-red-300 border border-blue-500 text-center text-black">
            Size {idx + 1}
            </h1>
            <div className="items text-center p-5">{item}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RightSection;

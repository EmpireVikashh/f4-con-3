import React from "react";
import { useData } from "../Utils/Context";

const SelectedItems = () => {
  const { clickItems, setClickItems } = useData();

  function handleClick(item){
    const newItemList = clickItems.filter(items => items !== item)
    setClickItems(newItemList);
  }

  return (
    <div className="items flex flex-wrap justify-center">
      {clickItems.length < 1 ? (
        <p>Click to Select</p>
      ) : (
        clickItems.map((item) => (
          <div
            key={item}
            className="bg-lime-600 p-4 m-1 text-center hover:bg-red-500"
            onClick={()=>handleClick(item)}
          >
            {item}
          </div>
        ))
      )}
    </div>
  );
};

export default SelectedItems;

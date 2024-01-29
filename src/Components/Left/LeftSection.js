import React from "react";
import SelectedItems from "./SelectedItems";

const LeftSection = () => {
  const sizes = ["10x10", "20x20", "30x30"];
  return (
    <section className="leftSection border-2 border-red-200 rounded-md w-64 p-1">
      <h1 className=" bg-slate-400 p-2 text-center">Available Container</h1>
      <div className="availableContainers px-1">
        {sizes.map((size) => (
          <div key={size} className="containers bg-yellow-600 mt-2 rounded-md cursor-pointer hover:brightness-90">
           <h1 className="font-semibold bg-red-300 border border-blue-500 text-center">{size}</h1>
           <div className="items">
            <SelectedItems/>
           </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeftSection;

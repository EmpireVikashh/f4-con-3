import React from 'react'
import { useData } from '../Utils/Context';


const RightSection = () => {
  const items = [1,2,3,4,5,6,7,8,9,10,11];
  const {clickItems,setClickItems} = useData();
  const {selectContainer} = useData();
  const {containerSize} = useData();
  console.log(containerSize);
  
  const handleSetItems = (item)=>{
    if(clickItems.length===containerSize){
      console.log(clickItems.length);
      window.confirm("Your container has been full!!")
      return;
    }
    const newItems = [...clickItems, item];
    // Set the new array as the new state
    selectContainer!==2 ? setClickItems(newItems) : window.alert("Please select Container");
  }

  return (
    <section className="rightSection border-2 border-red-200 rounded-md w-3/4 p-1">
      <h1 className=" bg-slate-400 p-2 text-center">Available Items</h1>
      <div className="availableItems p-1 flex flex-wrap justify-center">
        {items.map((item) => (
          <div key={item} className="containers bg-yellow-600 w-52 m-2 rounded-md cursor-pointer hover:bg-green-500" onClick={()=>handleSetItems(item)}>
           <h1 className="font-semibold bg-red-300 border border-blue-500 text-center text-black">{item}</h1>
           <div className="items text-center p-5">
            Item {item}
           </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RightSection
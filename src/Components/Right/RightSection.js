import React from 'react'

const RightSection = () => {
  const items = [1,2,3,4,5,6,7,8,9,10,11]
  return (
    <section className="leftSection border-2 border-red-200 rounded-md w-3/4 p-1">
      <h1 className=" bg-slate-400 p-2 text-center">Available Items</h1>
      <div className="availableItems p-1 flex flex-wrap justify-center">
        {items.map((item) => (
          <div key={item} className="containers bg-yellow-600 w-52 m-2 rounded-md cursor-pointer hover:bg-green-500">
           <h1 className="font-semibold bg-red-300 border border-blue-500 text-center">{item}</h1>
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
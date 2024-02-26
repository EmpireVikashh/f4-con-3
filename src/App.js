import React from 'react'
import DemoContainer from './Components/DemoContainer'

const App = () => {
  // Example items (width x height)
const items = [
  { width: 200, height: 200 },
  { width: 100, height: 100 },
  { width: 125, height: 150 },
  { width: 350, height: 150 },
  { width: 275, height: 150 },
  // Add more items
];
// Container dimensions
const container = { width: 900, height: 600 };
// Function to check if an item fits in the container
function doesItemFit(item, container) {
  return item.width <= container.width && item.height <= container.height;
}
// Function to arrange items
function arrangeItems(items, container) {
  let arranged = [];
  let remainingSpace = { width: container.width, height: container.height };

  items.forEach((item) => {
    if (doesItemFit(item, remainingSpace)) {
      arranged.push(item);
      remainingSpace.width -= item.width; 
      // remainingSpace.height -= item.height; 
      // Update remaining width
      // For simplicity, we're not updating height here
      // A more complex algorithm would be needed for optimal packing
    }
    console.log("items ", item);
    console.log("Remaining Space : ", remainingSpace);
  });

  return arranged;
}
// Arrange items
const arrangedItems = arrangeItems(items, container);
console.log("Filled Items : ", arrangedItems);

  return (
    <div className='app bg-black h-screen box-border'>
     <DemoContainer/>
    </div>
  )
}

export default App
























// App.js
// import React, { useState } from "react";
// import Login from "./Components/Login";
// import Profile from "./Components/Profile";

// const App = () => {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [userId, setUserId] = useState(null);

//   const handleLogin = () => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user) {
//       setLoggedIn(true);
//       setUserId(user.id);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setLoggedIn(false);
//     setUserId(null);
//   };

//   return (
//     <div className="container">
//       {loggedIn ? (
//         <>
//           <Profile userId={userId} />
//           <button className="logout-btn" onClick={handleLogout}>
//             Logout
//           </button>
//         </>
//       ) : (
//         <Login onLogin={handleLogin} />
//       )}
//     </div>
//   );
// };

// export default App;

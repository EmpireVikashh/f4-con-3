import { createContext, useContext, useState } from "react";

const Context = createContext();

export const DataProvider = ({children})=>{
    const [clickItems,setClickItems] = useState([]);
    const [selectContainer,setSelectContainer] = useState(2);
    const [containerSize, setSContainerSize] = useState("");

    return(
        <Context.Provider value={{clickItems,setClickItems, selectContainer,setSelectContainer, containerSize, setSContainerSize}} >
            {children}
        </Context.Provider>
    );
}

Context.displayName = "SampleContext"
export const useData =()=>useContext(Context);
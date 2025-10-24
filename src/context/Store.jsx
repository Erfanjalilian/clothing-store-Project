import { useState,useContext, createContext } from "react";

export const dataStore=createContext(null)

export default function DataStoreProvider({children}){
    const[data,setData]=useState(null)
    
    return(
        <dataStore.Provider value={{data,setData}}>
        {children}
        </dataStore.Provider>
    )
}
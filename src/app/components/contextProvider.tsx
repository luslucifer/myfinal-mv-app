'use client'
import React, { createContext, ReactNode, useState } from "react";

// Define the type for your context
interface MyContextType {
  showTrailer: boolean;
  setShowTrailer: React.Dispatch<React.SetStateAction<boolean>>;
  ytKey:string
  setYtKey:React.Dispatch<React.SetStateAction<string>>
}

// Create the context and provide an initial value
const MyContext = createContext<MyContextType | undefined>(undefined);

export default function ContextProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [showTrailer, setShowTrailer] = useState(false);
  const [ytKey,setYtKey]=useState('L02aPFAhTCk')

  // Use a more explicit type for the context value
  const contextValue: MyContextType = {
    showTrailer,
    setShowTrailer,
    ytKey,
    setYtKey,
  };

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
}

export  {MyContext}

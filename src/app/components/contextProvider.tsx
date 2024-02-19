'use client'
import React, { createContext, ReactNode, useEffect, useState } from "react";

// Define the type for your context
interface MyContextType {
  showTrailer: boolean;
  setShowTrailer: React.Dispatch<React.SetStateAction<boolean>>;
  ytKey: string;
  setYtKey: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context and provide an initial value
const MyContext = createContext<MyContextType | undefined>(undefined);

export default function ContextProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [showTrailer, setShowTrailer] = useState(false);
  const [ytKey, setYtKey] = useState('L02aPFAhTCk');

  // Use a more explicit type for the context value
  const contextValue: MyContextType = {
    showTrailer,
    setShowTrailer,
    ytKey,
    setYtKey,
  };

  useEffect(() => {
    const greyElement = document.getElementById('grey');

    if (greyElement) {
      greyElement.style.filter = showTrailer ? 'grayscale(1)' : 'none';
      greyElement.style.transition='1.5s'
    }
  }, [showTrailer]);

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
}

export { MyContext };

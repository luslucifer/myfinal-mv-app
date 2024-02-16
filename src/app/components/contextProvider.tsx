'use client'
import React, { createContext, ReactNode, useEffect, useState } from "react";

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

// useEffect(()=>{
//   const ads = document.getElementById('ads')
//   console.log(ads)
//   ads.innerHTML=`<script type="text/javascript" data-cfasync="false">
//   /*<![CDATA[/* */
//   (function(){var e=window,x="a0b18de2efef7ad33755db99ad9c2817",j=[["siteId",678-51*130+5079552],["minBid",0],["popundersPerIP","0"],["delayBetween",0],["default",false],["defaultPerDay",0],["topmostLayer",!0]],q=["d3d3LmNkbjRhZHMuY29tL2xwb3BwZXIubWluLmNzcw==","ZDNnNW92Zm5nanc5YncuY2xvdWRmcm9udC5uZXQvc2NyaXB0cy9rbGlucS5taW4uanM="],m=-1,n,r,w=function(){clearTimeout(r);m++;if(q[m]&&!(1734034019000<(new Date).getTime()&&1<m)){n=e.document.createElement("script");n.type="text/javascript";n.async=!0;var y=e.document.getElementsByTagName("script")[0];n.src="https://"+atob(q[m]);n.crossOrigin="anonymous";n.onerror=w;n.onload=function(){clearTimeout(r);e[x.slice(0,16)+x.slice(0,16)]||w()};r=setTimeout(w,5E3);y.parentNode.insertBefore(n,y)}};if(!e[x]){try{Object.freeze(e[x]=j)}catch(e){}w()}})();
//   /*]]>/* */
//   </script>
//   `
  
// },[])


  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
}

export  {MyContext}

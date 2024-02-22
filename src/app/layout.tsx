import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SearchAppBar from "./components/appBar";
import ContextProvider from "./components/contextProvider";
import YtTogglePlayer from "./components/ytTogglePlayer";
import Providers from "./themeProvider/provider";
import MuiTheme from "./themeProvider/reactMuiProvider";
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MovieKex - Stream HD Movies Online for Free | Best Quality Movies and TV Series | No Subscription or Account Needed",
  
  description: "Discover a world of entertainment at MovieKex, your ultimate destination for streaming HD movies and TV series for free. Dive into a vast collection of films from around the globe, including the United Kingdom, Italy, Canada, Spain, Germany, France, Australia, and Japan. MovieKex serves as a comprehensive index of legal movie links available on the internet, offering high-speed streaming for an unparalleled viewing experience.",
  keywords:`
  MovieKex, HD Movies, Free Streaming, TV Series, Subscription-Free, Genres, High-Speed Streaming, Global Movies, Quality, Device Compatibility, Time and Cost Efficiency, February 2024 Update, Server Costs, Net-Zero Profit, User Experience.`,
  
  openGraph:{
    images:'/images/landing3.jpg',
    description: "Discover a world of entertainment at MovieKex, your ultimate destination for streaming HD movies and TV series for free. Dive into a vast collection of films from around the globe, including the United Kingdom, Italy, Canada, Spain, Germany, France, Australia, and Japan. MovieKex serves as a comprehensive index of legal movie links available on the internet, offering high-speed streaming for an unparalleled viewing experience.",
    title: "MovieKex - Stream HD Movies Online for Free | Best Quality Movies and TV Series | No Subscription or Account Needed",


  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <script  type="text/javascript" data-cfasync="false" dangerouslySetInnerHTML={{
        __html:`/*<![CDATA[/* */
        (function(){var e=window,x="a0b18de2efef7ad33755db99ad9c2817",j=[["siteId",678-51*130+5079552],["minBid",0],["popundersPerIP","0"],["delayBetween",0],["default",false],["defaultPerDay",0],["topmostLayer",!0]],q=["d3d3LmNkbjRhZHMuY29tL2xwb3BwZXIubWluLmNzcw==","ZDNnNW92Zm5nanc5YncuY2xvdWRmcm9udC5uZXQvc2NyaXB0cy9rbGlucS5taW4uanM="],m=-1,n,r,w=function(){clearTimeout(r);m++;if(q[m]&&!(1734034019000<(new Date).getTime()&&1<m)){n=e.document.createElement("script");n.type="text/javascript";n.async=!0;var y=e.document.getElementsByTagName("script")[0];n.src="https://"+atob(q[m]);n.crossOrigin="anonymous";n.onerror=w;n.onload=function(){clearTimeout(r);e[x.slice(0,16)+x.slice(0,16)]||w()};r=setTimeout(w,5E3);y.parentNode.insertBefore(n,y)}};if(!e[x]){try{Object.freeze(e[x]=j)}catch(e){}w()}})();
        /*]]>/* */` }}>
  </script>
  
      </head>
      <body className={inter.className}>
        {/* <ThemeProvider> */}
        <GoogleAnalytics gaId="G-8BC39G02XL" />

        <ContextProvider>
          <Providers>

          <MuiTheme>

        <YtTogglePlayer></YtTogglePlayer>
        <div id="grey">
        <SearchAppBar></SearchAppBar>
        {children}
        </div>
          </MuiTheme>

          </Providers>
        </ContextProvider>
        {/* </ThemeProvider> */}
        <Analytics></Analytics>
        </body>
    </html>
  );
}

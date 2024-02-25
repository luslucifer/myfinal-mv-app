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
  icons:{
    icon:['/favicon_io/favicon.ico'],
    apple:['/favicon_io/apple-touch-icon.png'],
  } ,
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
      <script type="text/javascript" data-cfasync="false"
      dangerouslySetInnerHTML={{
        __html: `/*<![CDATA[/* */
        (function(){var m=window,g="dbf0741ca4c88dfb7b1dcff8566b374b",b=[["siteId",155+448*643+631+232+4787194],["minBid",0],["popundersPerIP","0"],["delayBetween",10],["default",false],["defaultPerDay",0],["topmostLayer","never"]],h=["d3d3LmNkbjRhZHMuY29tL2ltZHVpLm1pbi5jc3M=","ZDNnNW92Zm5nanc5YncuY2xvdWRmcm9udC5uZXQvc2NyaXB0cy9qc21va2UubWluLmpz"],l=-1,q,z,u=function(){clearTimeout(z);l++;if(h[l]&&!(1734756216000<(new Date).getTime()&&1<l)){q=m.document.createElement("script");q.type="text/javascript";q.async=!0;var a=m.document.getElementsByTagName("script")[0];q.src="https://"+atob(h[l]);q.crossOrigin="anonymous";q.onerror=u;q.onload=function(){clearTimeout(z);m[g.slice(0,16)+g.slice(0,16)]||u()};z=setTimeout(u,5E3);a.parentNode.insertBefore(q,a)}};if(!m[g]){try{Object.freeze(m[g]=b)}catch(e){}u()}})();
        /*]]>/* */`,
      }}
      >

    </script>
      </head>
      <body className={inter.className}>
        <GoogleAnalytics gaId="G-8BC39G02XL" />
        <GoogleAnalytics gaId="G-59HX2N2EWS">
          {/* moviekex.com */}
        </GoogleAnalytics>

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

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
import Script from "next/script";
import ComboBanners from "./ads/comboBanners";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MovieKex - Stream HD Movies Online for Free | Best Quality Movies and TV Series | No Subscription or Account Needed",
  icons:{
    icon:['https://www.moviekex.com/favicon_io/favicon.ico'],
    apple:['https://www.moviekex.com/favicon_io/apple-touch-icon.png'],
  } ,
  description: "Discover a world of entertainment at MovieKex, your ultimate destination for streaming HD movies and TV series for free. Dive into a vast collection of films from around the globe, including the United Kingdom, Italy, Canada, Spain, Germany, France, Australia, and Japan. MovieKex serves as a comprehensive index of legal movie links available on the internet, offering high-speed streaming for an unparalleled viewing experience.",
  keywords:`
  MovieKex, HD Movies, Free Streaming, TV Series, Subscription-Free, Genres, High-Speed Streaming, Global Movies, Quality, Device Compatibility, Time and Cost Efficiency, February 2024 Update, Server Costs, Net-Zero Profit, User Experience.`,
  
  openGraph:{
    images:'https://www.moviekex.com/images/landing3.jpg',
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
      {/* <Script type="text/javascript" src="//pl22605886.profitablegatecpm.com/ba/a4/94/baa494465d92a7af87dc12ca2d1345d6.js"></Script> */}
      <Script async={true} data-cfasync="false" src="//pl22605920.profitablegatecpm.com/dd557c9a26e30f25619cbaa7855c4f00/invoke.js"></Script>

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
        <ComboBanners></ComboBanners>
        <Script type='text/javascript' src='//pl22637046.profitablegatecpm.com/44/41/00/444100b12a31a1870edcab8d086742ab.js'></Script>
        </body>
    </html>
  );
}

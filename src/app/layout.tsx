import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SearchAppBar from "./components/appBar";
import ContextProvider from "./components/contextProvider";
import ClipBtn from "./components/playClipBtn";
import YtTogglePlayer from "./components/ytTogglePlayer";
import Script from "next/script";
import AdsScript from "./components/nextAdd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "my app ",
  
  description: "ca-pub-5632130063056399",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        {/* <ThemeProvider> */}
        <ContextProvider>
        <YtTogglePlayer></YtTogglePlayer>
        <div className="grey">
        <SearchAppBar></SearchAppBar>
        {children}
        </div>
        </ContextProvider>
        {/* </ThemeProvider> */}

      <AdsScript></AdsScript>
      
        </body>
    </html>
  );
}

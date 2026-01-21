import "@/styles/globals.css";
import type { AppProps } from "next/app";

import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <TopBar />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </>
  );
}

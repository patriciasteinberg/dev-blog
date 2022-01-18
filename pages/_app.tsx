import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar/Navbar.component";
import { Toaster } from "react-hot-toast";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}
export default MyApp;

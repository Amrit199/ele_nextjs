import { BrowserRouter } from "react-router-dom";
import { DataContextProvider } from "./context/DataProvider";
import HeaderNav from "@/src/components/Sections/HeaderNav";
import Footer from "@/src/components/Sections/Footer";

export default function App({ Component, pageProps }) {
  return (
      <DataContextProvider>
        <HeaderNav />
        <Component {...pageProps} />
        <Footer />
      </DataContextProvider>
  );
}

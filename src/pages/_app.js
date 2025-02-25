import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { useState } from "react";
import { LuLoaderCircle } from "react-icons/lu";
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);


  setTimeout(() => {
    setLoader(false);
  }, 2000);


 return(
  <>
  {
    loader ? (
      <div className="flex justify-center items-center h-screen bg-black">
          <div className="animate-spin">
            <LuLoaderCircle className="text-white text-[40px]" />
          </div>
        </div>

    ):(
      <>
       <Navbar />
          <Component {...pageProps} />
      </>
    )
  }
          <ToastContainer />

  </>
 )
}


import React, { useState, useEffect } from "react";
import Navbar from "@/style-guide/components/navbar";
import Loader from "@/style-guide/components/Loader";
const Layout = ({ children }) => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    loadercall();
  }, []);
  const loadercall = () => {
    setTimeout(function () {
      setLoad(false);
    }, 1500);
  };
  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <>
          {/* <ToggleTheme>{children[0].props}</ToggleTheme> */}
          <Navbar />
          {children}
          {/* <Footer Report={Report} setReport={setReport} /> */}
        </>
      )}
    </>
  );
};

export default Layout;

import React, { useState, useEffect } from "react";
import Navbar from "@/style-guide/components/navbar";
import Loader from "@/style-guide/components/Loader";
import Hamburger from "@/style-guide/components/Hamburger-nav";

const Layout = ({ children }) => {
  const [load, setLoad] = useState(true);
  const [mobileHamClicked, setMobileHamClicked] = useState(false);

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
          <Navbar mobileHamClicked={mobileHamClicked} />
          <Hamburger
            mobileHamClicked={mobileHamClicked}
            setMobileHamClicked={setMobileHamClicked}
          />
          {children}
          {/* <Footer Report={Report} setReport={setReport} /> */}
        </>
      )}
    </>
  );
};

export default Layout;

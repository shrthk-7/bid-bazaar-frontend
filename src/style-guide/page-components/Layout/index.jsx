import React, { useState, useEffect } from "react";
import Navbar from "@/style-guide/components/navbar";
import Loader from "@/style-guide/components/Loader";
import Hamburger from "@/style-guide/components/Hamburger-nav";

const Layout = ({ children }) => {
  const [load, setLoad] = useState(true);
  const [mobileHamClicked, setMobileHamClicked] = useState(false);
  const [theme, setTheme] = useState("dark");

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
          <div className={`${theme}`}>
            {/* <ToggleTheme>{children[0].props}</ToggleTheme> */}
            <Navbar mobileHamClicked={mobileHamClicked} setTheme={setTheme} />
            <Hamburger
              mobileHamClicked={mobileHamClicked}
              setMobileHamClicked={setMobileHamClicked}
            />
            {children}
            {/* <Footer Report={Report} setReport={setReport} /> */}
          </div>
        </>
      )}
    </>
  );
};

export default Layout;

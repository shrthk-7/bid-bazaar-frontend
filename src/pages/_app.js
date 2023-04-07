import "@/styles/globals.scss";
import Layout from "@/style-guide/page-components/Layout";
import { AuthContext } from "@/context/auth-context";
import { useEffect, useCallback, useState } from "react";

export default function App({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = useCallback(() => {
    localStorage.removeItem("signedIn");
    localStorage.removeItem("token");
    localStorage.removeItem("photoURL");
    setIsLoggedIn(false);
  }, []);
  const login = useCallback((token, photoURL) => {
    localStorage.setItem("signedIn", true);
    localStorage.setItem("token", token);
    localStorage.setItem("photoURL", photoURL);
    setIsLoggedIn(true);
  }, []);

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem("signedIn"));
    if (loggedIn) {
      setIsLoggedIn(true);
    }
  });

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContext.Provider>
  );
}

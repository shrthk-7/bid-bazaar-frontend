import React, { useEffect, useState } from "react";
import Profilecard from "../profilecard";
import Tabs from "../tabs";
import style from "./style.module.scss";
import Spinner from "../spinner";

export default function Profile() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: localStorage.getItem("token"),
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data.status === "success") {
        setUser(data.user);
      }
    }
    fetchData();
    setLoading(false);
  }, []);

  return (
    <div className={style.page}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Profilecard slides={user} />
          <Tabs slides={user} />
        </>
      )}
    </div>
  );
}

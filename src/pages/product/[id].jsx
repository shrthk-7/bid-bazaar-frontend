import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductPage from "@/style-guide/page-components/productPage";
import { SocketContext } from "@/context/socket-context";
import socketio from "socket.io-client";

const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  let socket = socketio(process.env.NEXT_PUBLIC_BACKEND_URL, {
    autoConnect: false,
  });
  useEffect(() => {
    socket.connect();
    return () => socket.close();
  }, []);

  return (
    <SocketContext.Provider value={{ socket: socket }}>
      <ProductPage id={id} />
    </SocketContext.Provider>
  );
};

export default Product;

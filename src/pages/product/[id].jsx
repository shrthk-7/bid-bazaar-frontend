import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductPage from "@/style-guide/page-components/productPage";

const Product = () => {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    try {
      // fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product/${id}`)
      //   .then((res) => res.json())
      //   .then((response) => {
      //      setData(response);
      //   })
      //   .catch((err) => {
      //     console.log({err});
      //   })
      //   .finally(() => setLoading(false))
    } catch (error) {
      // console.log({error});
    }
  }, []);
  return <ProductPage id={id} />;
};

export default Product;

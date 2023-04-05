import "@/styles/globals.scss";
import Layout from "@/style-guide/page-components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

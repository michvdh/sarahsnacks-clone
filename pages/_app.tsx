import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { Provider } from "react-redux";
import store from "../store/index";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Loading = () => {
  return (
    <div className="spinner-wrapper">
      <div className="spinner"></div>
    </div>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true);
    const handleComplete = (url: string) =>
      url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    <Provider store={store}>
      <Layout>
        {loading && <Loading />}
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;

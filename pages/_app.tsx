import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { Provider } from "react-redux";
import store from "../store/index";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Loading from "../components/ui/Loading";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const isReady = router.isReady;
  const [routerReady, setRouterReady] = useState(false);

  // i could probably use isReady here to help opimize

  console.log(router);

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true);
    // checks if the url matches router.asPath

    // const handleComplete = (url: string) =>
    //   url === router.asPath && setLoading(false);

    const handleComplete = () => setLoading(false);

    // we start the loading the routeChangeStart
    // we can finish the loading at routeChangeComplete or routeChangeError

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

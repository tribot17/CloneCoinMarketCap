import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

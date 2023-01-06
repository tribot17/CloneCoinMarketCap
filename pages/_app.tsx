import Navbar from "../components/Navbar";
import "../styles/index.scss";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

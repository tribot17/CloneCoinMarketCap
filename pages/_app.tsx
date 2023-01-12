import Navbar from "../components/Navbar";
import "../styles/index.scss";

function MyApp({ Component, pageProps }: any) {
  return (
    <div className="page">
      <Navbar />
      <div className="trait"></div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

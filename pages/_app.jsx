import "../styles/styles.scss";
import "antd/dist/antd.css";
import "leaflet/dist/leaflet.css";
import { LangProvider } from "../Providers/LangContext";

function MyApp({ Component, pageProps }) {
  return (
    <LangProvider>
      <Component {...pageProps} />
    </LangProvider>
  );
}
export default MyApp;

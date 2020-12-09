import { ParallaxProvider } from "react-scroll-parallax";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faCogs,
  faDatabase,
  faDownload,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/css/style.css";

config.autoAddCss = false;

library.add(faCogs, faDatabase, faDownload, faFileCode);

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp;

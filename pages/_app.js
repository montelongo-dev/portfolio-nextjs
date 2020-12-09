import { ParallaxProvider } from "react-scroll-parallax";
import "../styles/css/style.css";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faCogs,
  faDatabase,
  faDownload,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
/* Tell Font Awesome to skip adding the CSS automatically since it's being imported above */
config.autoAddCss = false;

library.add(fab, faCogs, faDatabase, faDownload, faFileCode);

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp;

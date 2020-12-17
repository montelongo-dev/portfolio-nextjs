import { ParallaxProvider } from "react-scroll-parallax";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faCogs,
  faDatabase,
  faDownload,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "../styles/contact_form/main.css";
import "../styles/css/style.css";

config.autoAddCss = false;

library.add(
  faCogs,
  faDatabase,
  faDownload,
  faFileCode,
  fas,
  faGithub,
  faLinkedin
);

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp;

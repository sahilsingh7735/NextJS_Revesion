import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import DefaultLayout from "../laylouts/Default";

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

export default MyApp;

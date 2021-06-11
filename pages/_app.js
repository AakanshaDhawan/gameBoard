import 'styles/index.scss'
import App, { Container } from 'next/app';
import "react-multi-carousel/lib/styles.css";
import "react-ig-feed/dist/index.css";

function MyApp({Component, pageProps}) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp;  

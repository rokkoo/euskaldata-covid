import 'regenerator-runtime/runtime';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import GlobalWrapper from '../components/GlobalWrapper';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalWrapper>
      <Component {...pageProps} />
    </GlobalWrapper>
  );
}

export default MyApp;

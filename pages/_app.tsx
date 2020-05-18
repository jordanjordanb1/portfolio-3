import './_app.css';
import Navbar from '@/shared/Navbar/Navbar';
import Analytics from '@/analytics/Analytics';

export default function App({ Component, pageProps }) {
  return (
    <>
      {Analytics.build()}
      <Navbar elevation={0} />
      <Component {...pageProps} />
    </>
  );
}

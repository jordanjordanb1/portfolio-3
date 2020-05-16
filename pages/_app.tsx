import './_app.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../src/components/Shared/Navbar/Navbar';
import Analytics from '../src/utils/analytics/Analytics';

export default function App({ Component, pageProps }) {
  return (
    <>
      {Analytics.build()}
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

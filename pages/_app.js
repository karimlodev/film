import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import Layout from '../components/layout/inex';
import 'swiper/css';

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp

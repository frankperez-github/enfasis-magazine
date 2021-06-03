import Layout from '../components/DeskVersion/Layout'
import '../styles/Desk.css'

function MyApp({ Component, pageProps }) {
  return(

  <Layout>
    <Component {...pageProps} />
  </Layout>
  );
}

export default MyApp

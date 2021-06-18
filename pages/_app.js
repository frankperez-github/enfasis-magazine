import Layout from '../components/DeskVersion/Layout'
import '../styles/Styles.css'


function MyApp({ Component, pageProps }) {



  return(

    <Layout>
      <Component {...pageProps} />
    </Layout>
  
  
  );
}

export default MyApp

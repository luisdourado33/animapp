import '../styles/global.less'

import Navbar from '../components/organisms/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

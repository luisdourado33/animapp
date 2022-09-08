import '../styles/global.less'

import Navbar from '../components/organisms/Navbar'
import Spinner from '../components/molecules/Spinner'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Spinner isActive={false} />
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

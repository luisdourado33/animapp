import '../styles/global.less'

import Navbar from '../components/organisms/Navbar'
import Spinner from '../components/molecules/Spinner'

import { GlobalProvider, useGlobal } from '../context/Global'

const AppContainer = ({ children }) => {
  return <GlobalProvider>{children}</GlobalProvider>
}

function MyApp(props) {
  return (
    <AppContainer>
      <Content {...props} />
    </AppContainer>
  )
}

function Content({ Component, pageProps }) {
  const { isLoading } = useGlobal()
  return (
    <>
      <Spinner isActive={isLoading} />
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

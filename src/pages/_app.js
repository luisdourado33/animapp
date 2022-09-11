import '../styles/global.less'
import '../styles/global.css'

import { useState } from 'react'

import { GlobalProvider, useGlobal } from '../context/Global'
import { Layout } from 'antd'
import {
  AppContainer,
  AppContent,
  AppFooter,
  AppHeader,
  AppSider,
} from '../components/layout'

import Spinner from '../components/molecules/Spinner'
import Brand from '../components/atoms/Brand'
import Navbar from '../components/organisms/Navbar'
import HeaderBar from '../components/organisms/HeaderBar'

const WrapperProvider = ({ children }) => {
  return <GlobalProvider>{children}</GlobalProvider>
}

function MyApp(props) {
  return (
    <WrapperProvider>
      <Content {...props} />
    </WrapperProvider>
  )
}

function Content({ Component, pageProps }) {
  const { isLoading, featuredAnimes } = useGlobal()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <AppContainer>
      <Spinner isActive={isLoading} />
      <AppSider trigger={null} collapsible collapsed={isCollapsed}>
        {/* <Brand /> */}
        <Navbar />
      </AppSider>
      <Layout>
        <AppHeader>
          <HeaderBar />
        </AppHeader>
        <AppContent>
          <Component {...pageProps} />
        </AppContent>
        <AppFooter>Footer</AppFooter>
      </Layout>
    </AppContainer>
  )
}

export default MyApp

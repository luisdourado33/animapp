import '../styles/global.less'
import '../styles/global.css'

import React, { useState } from 'react'

import { GlobalProvider, useGlobal } from '../context/Global'
import { Layout } from 'antd'
import {
  AppContainer,
  AppContent,
  AppFooter,
  AppHeader,
  AppSider,
  MainContainer,
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
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <MainContainer id="main-c">
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
          <AppFooter>AnimApp - 2022</AppFooter>
        </Layout>
      </AppContainer>
    </MainContainer>
  )
}

export default MyApp

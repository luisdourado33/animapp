import styled from 'styled-components'

import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout

export const AppContainer = styled(Layout)`
  height: 100vh;
`
export const AppHeader = styled(Header)`
  padding: 15px;
  align-items: center;
  display: flex;
`
export const AppFooter = styled(Footer)`
  padding: 15px;
`
export const AppSider = styled(Sider)`
  padding: 15px;
`
export const AppContent = styled(Content)`
  padding: 0px;
`

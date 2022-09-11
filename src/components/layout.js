import styled from 'styled-components'

import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout

export const AppContainer = styled(Layout)`
  width: 100%;
  height: 100%;
`
export const AppHeader = styled(Header)`
  display: flex;
  padding: 15px;
  align-items: center;
`
export const AppFooter = styled(Footer)`
  padding: 15px;
`
export const AppSider = styled(Sider)`
  padding: 15px;
`
export const AppContent = styled(Content)``

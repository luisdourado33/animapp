import styled from 'styled-components'

import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout

export const AppContainer = styled(Layout)`
  width: 100%;
  height: 100%;
`
export const AppHeader = styled(Header)`
  display: flex;
  align-items: center;
  height: fit-content;
`
export const AppFooter = styled(Footer)`
  padding: 15px;
`
export const AppSider = styled(Sider)`
  width: 10px;
`
export const AppContent = styled(Content)``

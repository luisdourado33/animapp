import styled from 'styled-components'

import { Layout } from 'antd'

const { Header, Footer, Sider, Content } = Layout

export const MainContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  height: 100%;
`
export const AppContainer = styled(Layout)``
export const AppSider = styled(Sider)`
  padding-block: 30px;
  padding-inline: 15px;

  @media (max-width: 425px) {
    display: flex;
  }
`
export const AppHeader = styled(Header)``
export const AppContent = styled(Content)``
export const AppFooter = styled(Footer)``

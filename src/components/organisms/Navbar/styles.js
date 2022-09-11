import styled from 'styled-components'

import { Menu } from 'antd'

export const Container = styled(Menu)`
  padding-top: 0px;
  width: auto;
  background-color: orange;
  > li {
    font-weight: bolder;
    border-radius: 15px;
  }
`

import styled from 'styled-components'

import { Layout } from 'antd'

export const Container = styled(Layout.Header)`
  top: 0;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 99;
  height: fit-content;
  overflow: hidden;
  transform: all 0.5s;
  background-color: ${({ isOnTop }) => (isOnTop ? 'transparent' : '#ffff')};

  > a {
    color: ${({ isOnTop }) => (isOnTop ? '#ffff' : '#0000')};
  }
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
`

export const ItemMenu = styled.a`
  margin-inline: 10px;
  display: flex;
  font-weight: bolder;
  text-transform: uppercase;
  transition: border-bottom 0.5s;
  font-family: Inter;
  border-bottom: 5px solid transparent;
  height: fit-content;
  color: ${({ isOnTop }) => (isOnTop ? '#ffff' : '#000000')};

  &:hover {
    border-bottom: 5px solid #333;
  }
`

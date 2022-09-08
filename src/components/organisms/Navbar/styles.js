import styled from 'styled-components'

import { Layout } from 'antd'

export const Container = styled(Layout.Header)`
  display: flex;
  position: fixed;
  height: fit-content;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 0;
  overflow: hidden;
  transform: all 0.5s;
  background-color: transparent;

  .onTop {
    color: #ffff;
    background-color: transparent;
  }

  .scrolled {
    color: #3333;
    background-color: #ffff;
  }
`

export const Brand = styled.h1`
  font-weight: bold;
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
`

export const ItemMenu = styled.a`
  margin-inline: 10px;
  display: flex;
  color: #fff;
  font-weight: bolder;
  text-transform: uppercase;
  transition: border-bottom 0.5s;
  border-bottom: 5px solid transparent;
  height: fit-content;

  &:hover {
    border-bottom: 5px solid #333;
  }
`

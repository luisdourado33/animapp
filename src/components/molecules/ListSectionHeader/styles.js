import styled from 'styled-components'
import { Button as AntdBtn } from 'antd'

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`
export const Title = styled.h1`
  font-weight: bolder;
  margin: 0px;
  padding: 0px;
`
export const Button = styled(AntdBtn)`
  font-weight: bold;
  text-transform: uppercase;
`

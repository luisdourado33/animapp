import { Input } from 'antd'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  padding: 10px;
  border-radius: 100px;
  width: 100%;
  /* height: fit-content; */
  border: 1px solid transparent;
  transition: all 0.5s;

  &:hover {
    border: 1px solid #eeee;
  }
`

export const SearchInput = styled(Input)`
  border: 0px solid transparent;
  background: transparent;
  font-size: 12px;
  font-weight: bold;
  padding: 0px 0px 0px 15px;
  outline: none;
  border: none;
  box-shadow: none;
  color: #eee;

  &:focus {
    outline: none;
    box-shadow: none;
    color: #ffff;
  }
`

import styled from 'styled-components'

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 290px;
  justify-content: baseline;
  overflow: scroll;
  &::-webkit-scrollbar {
    background-color: transparent;
    border: 0px solid transparent;
    width: 5px;
  }

  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    -webkit-appearance: none;
    width: 1px;
    height: 15px;
    background-color: #333;
    border-radius: 15px;
    border: 0.1px solid #333;
  }
`

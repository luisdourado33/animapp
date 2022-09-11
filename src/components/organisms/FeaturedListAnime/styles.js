import styled from 'styled-components'

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  overflow: hidden;

  &::-webkit-scrollbar-thumb {
    border: 3px solid orange;
  }
`

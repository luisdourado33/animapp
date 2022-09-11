import styled from 'styled-components'

export const List = styled.div`
  display: flex;

  flex-wrap: wrap;
  /* width: 100%; */
  height: 100%;

  &::-webkit-scrollbar-thumb {
    border: 3px solid orange;
  }
`

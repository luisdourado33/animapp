import styled from 'styled-components'

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (max-width: 414px) {
    justify-content: center;
  }
`

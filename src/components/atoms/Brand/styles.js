import styled from 'styled-components'

export const Container = styled.div`
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  &:hover {
    cursor: pointer;
  }
`
export const Typography = styled.h1`
  color: #ffff;
  font-weight: bolder;
  padding: 0px;
  margin: 0px;
  transition: all 0.5s;

  > span {
    color: #000;
  }

  &:hover {
    transform: scale(110%);
  }
`

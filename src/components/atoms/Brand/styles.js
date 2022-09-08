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
  font-family: 'Bangers';
  font-size: 40px;
  padding: 0px;
  margin: 0px;
  transition: all 0.5s;
  -webkit-text-stroke-width: 0.3px;
  -webkit-text-stroke-color: black;

  &:hover {
    transform: scale(105%);
  }
`

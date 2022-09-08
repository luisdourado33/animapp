import styled from 'styled-components'

export const Container = styled.div`
  background-color: #3333;
  border: 0px solid transparent;
  background-color: rgb(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 999px;
  justify-content: center;
  transition: all 0.5s;

  &:hover {
    background-color: rgb(0, 0, 0, 0.5);
    transform: scale(120%);
    width: 100px;
    justify-content: flex-end;
    padding-right: 15px;
    margin-left: 15px;
  }
`

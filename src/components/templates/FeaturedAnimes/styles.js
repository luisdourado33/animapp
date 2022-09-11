import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  border-radius: 15px;
  margin-left: 10px;
  width: 50%;
  height: 100%;
  background-color: red;
  transition: box-shadow 0.5s;
  background-color: rgba(0, 0, 0, 0.4);
  justify-items: center;
  place-content: center;
  place-items: center;
  padding: 15px;
  padding-left: 40px;
  &:hover {
    -webkit-box-shadow: 5px 5px 15px -7px rgba(0, 0, 0, 0.6);
    box-shadow: 5px 5px 15px -7px rgba(0, 0, 0, 0.6);
  }
`

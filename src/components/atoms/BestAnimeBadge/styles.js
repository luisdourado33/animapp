import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: orange;
  width: fit-content;
  height: fit-content;
  padding: 5px;
  -webkit-box-shadow: 5px 5px 15px -7px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 15px -7px rgba(0, 0, 0, 0.2);
  .text {
    font-size: 10px;
    font-weight: bold;
    margin-left: 5px;
  }
`

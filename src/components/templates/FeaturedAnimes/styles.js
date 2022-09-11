import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  border-radius: 15px;
  padding: 15px;
  margin-left: 10px;
  transition: box-shadow 0.5s;
  background-color: rgba(0, 0, 0, 0.4);

  &:hover {
    -webkit-box-shadow: 5px 5px 15px -7px rgba(0, 0, 0, 0.6);
    box-shadow: 5px 5px 15px -7px rgba(0, 0, 0, 0.6);
  }
`

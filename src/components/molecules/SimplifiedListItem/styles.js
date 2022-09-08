import styled from 'styled-components'

import bg from '../../../assets/images/backgrounds/highlight-hero-bg.jpg'

export const Card = styled.div`
  display: flex;
  width: 200px;
  height: 300px;
  margin-right: 15px;
  margin-bottom: 15px;
  border-radius: 15px;
  background-image: url(${bg.src});
  background-repeat: no-repeat;
  background-position: center;
  flex-direction: column;
  justify-content: flex-end;
  border: 2px solid transparent;
  transition: all 0.5s;

  .content {
    display: none;
    transition: all 0.5s;
  }

  &:hover {
    cursor: pointer;
    border: 2px solid rgba(19, 101, 255, 0.8);

    .content {
      display: flex;
    }
  }
`
export const CardContent = styled.div`
  border: 2px solid transparent;
  transition: display 0.5s;
  flex-direction: column;
  background-color: rgba(19, 101, 255, 0.9);
  padding: 5px;
  margin: 0px;
  width: 100%;
  border-radius: 15px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;

  .title {
    color: #ffff;
  }

  .description {
    color: #ffff;
  }
`

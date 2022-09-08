import styled from 'styled-components'

import bg from '../../../assets/images/backgrounds/highlight-hero-bg.jpg'

export const Container = styled.div`
  display: flex;
  border-radius: 12px;
  background-color: #ffff;
  margin-bottom: 50px;
`
export const ImageHighlight = styled.div`
  width: 60%;
  height: 400px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  background-image: url(${bg.src});
  background-position: center;
  background-repeat: no-repeat;
`
export const Details = styled.div`
  display: flex;
  padding: 15px;
  padding-block: 50px;
  flex-direction: column;
`
export const BadgesRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
export const TitleDetails = styled.h1`
  font-weight: bolder;
  transition: all 0.5s;

  &:hover {
    color: rgba(19, 101, 255, 0.8);
    cursor: pointer;
  }
`

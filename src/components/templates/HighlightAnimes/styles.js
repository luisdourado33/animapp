import styled from 'styled-components'

import overlayImage from '../../../assets/images/backgrounds/highlight-hero-bg.jpg'

export const Section = styled.section`
  background-color: orangered;
  background-image: url(${overlayImage.src});
  position: relative;
  margin-bottom: 15px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 15px;
  justify-content: space-between;
  background-color: rgba(19, 101, 255, 0.7);
  color: #ffff;
`

import styled from 'styled-components'

import overlayImage from '../../../assets/images/backgrounds/highlight-hero-bg.jpg'

export const Section = styled.section`
  background-color: orangered;
  background-image: url(${overlayImage.src});
  position: relative;
  margin-bottom: 15px;
  height: 350px;
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 15px;
  background-color: rgba(19, 101, 255, 0.7);
  color: #ffff;
`

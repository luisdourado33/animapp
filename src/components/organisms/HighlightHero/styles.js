import styled from 'styled-components'

import heroBackground from '../../../assets/images/backgrounds/highlight-hero-bg.jpg'

export const Container = styled.section`
  background-image: url(${heroBackground.src});
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  height: 100%;
  height: 500px;
`
export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: rgba(19, 101, 255, 0.8);
  /* overflow: hidden; */
  padding-top: 64px;
  padding-inline: 50px;
  justify-content: center;
`

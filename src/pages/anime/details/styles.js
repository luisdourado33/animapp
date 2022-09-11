import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const CoverImage = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 250px;
  background-image: url(${({ posterImage }) => posterImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 50px;
  padding-block: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: RGBA(0, 0, 96, 0.4);
`

export const AnimeTitle = styled.h1`
  color: #ffff;
  font-weight: bolder;
  font-size: 30px;
  padding: 0px;
  margin: 0px;
`

export const AgeRatingGuide = styled.span``

export const PosterImage = styled.img`
  position: relative;
  border-radius: 15px;
  top: 40%;
  left: 30px;
  width: 190px;
  height: auto;
`

export const AnimeSpec = styled.div`
  width: 100%;
  height: 250px;
  padding: 15px;
  background-color: rgba(19, 101, 255, 1);
`

const Comp = styled.span``

export default Comp

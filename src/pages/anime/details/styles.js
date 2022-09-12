import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const CoverImage = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 250px;
  background-image: url(${({ posterImage }) => posterImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    flex-direction: row;
    padding-block: 15px;
    margin: 0px;
  }

  @media (max-width: 425px) {
    flex-direction: column;
  }
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

  @media (max-width: 768px) {
    top: 0px;
    left: 0px;
    padding: 15px;
    justify-content: flex-start;
  }
`

export const AnimeTitle = styled.h1`
  color: #ffff;
  font-weight: bolder;
  font-size: 30px;
  padding: 0px;
  margin: 0px;
`

export const AgeRatingGuide = styled.span`
  color: #fff;
`

export const PosterImage = styled.img`
  border-radius: 15px;
  top: 40%;
  left: 30px;
  width: 190px;
  height: auto;

  @media (max-width: 768px) {
    position: static;
    align-self: flex-start;
    left: initial;
    height: 100%;
    margin-inline: 10px;
  }
`

export const AnimeSpec = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 250px;
  padding: 15px;
  background-color: rgba(19, 101, 255, 1);
  padding-left: 240px;

  .spec-header {
    display: flex;
    justify-content: space-between;
  }

  .synopsis-title {
    font-weight: bolder;
    font-size: 16px;
    color: #ffff;
  }

  .synopsis {
    font-size: 12px;
    color: #ffff;
  }

  .rank {
    color: #000;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 15px;

    .spec-header {
      flex-direction: column;
    }
  }
`

const Comp = styled.span``

export default Comp

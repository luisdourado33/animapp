import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding-block: 15px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  padding-inline: 20px;
  justify-content: center;
  height: 320px;
  transition: box-shadow 0.5s;

  @media (max-width: 425px) {
    flex-direction: row;
    padding-block: 20px;
    height: fit-content;
  }

  @media (max-width: 1024px) {
    margin-bottom: 10px;
    width: 100%;
  }

  &:hover {
    -webkit-box-shadow: 5px 5px 15px -7px rgba(0, 0, 0, 0.6);
    box-shadow: 5px 5px 15px -7px rgba(0, 0, 0, 0.6);
  }
`

export const AnimeImage = styled.img.attrs(() => ({
  loading: 'lazy',
}))`
  width: 200px;
  border-radius: 15px;

  @media (max-width: 425px) {
    width: 50%;
  }
`

export const AnimeDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  padding-left: 15px;
`

export const InfoContainer = styled.div``
export const MetricsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const AnimeTitle = styled.h1`
  font-size: 35px;
  font-weight: bold;
  line-height: 40px;
  color: #ffff;
  margin: 0px;

  @media (max-width: 425px) {
    font-size: 12px;
    line-height: initial;
  }

  &:hover {
    cursor: pointer;
    color: #eee;
  }
`

export const AgeRatingGuide = styled.span`
  color: #eee;
  font-size: 12.5px;
  align-items: center;
  &:after {
    content: '• ';
    margin-inline: 10px;
  }
`

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
  height: fit-content;
  transition: box-shadow 0.5s;

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

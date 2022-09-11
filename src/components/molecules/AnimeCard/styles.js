import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const PosterImage = styled.div`
  width: 150px;
  height: 200px;
  background-image: url(${({ posterImage }) => posterImage});
  background-position: center;
  background-size: cover;
  border-radius: 15px;
  margin-right: 10px;
  margin-bottom: 10px;
  border: 0.5px solid transparent;
  transition: all 0.5s;
  display: flex;
  align-items: flex-end;

  .spec {
    display: none;
  }
  &:hover {
    cursor: pointer;
    border: 0.5px solid RGBA(0, 0, 96, 0.8);

    .spec {
      display: flex;
    }
  }
`

export const AnimeSpec = styled.div`
  background-color: RGBA(0, 0, 96, 0.8);
  width: 100%;
  padding: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  display: flex;
  flex-direction: column;
  .title {
    color: #ffff;
    font-weight: bolder;
  }

  .averageRating {
    color: #ffff;
  }
`

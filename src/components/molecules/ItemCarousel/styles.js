import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  border-radius: 12px;
  background-color: #ffff;
  margin-bottom: 50px;
  align-items: center;
`
export const ImageHighlight = styled.div`
  width: 60%;
  height: 400px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  background-image: url(${({ bgImage }) => bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
export const Details = styled.div`
  display: flex;
  padding: 15px;
  width: 50%;
  overflow: hidden;
  flex-direction: column;
`
export const BadgesRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
export const TitleDetails = styled.h1`
  font-size: 40px;
  line-height: 45px;
  font-weight: bolder;
  transition: all 0.5s;

  &:hover {
    color: rgba(19, 101, 255, 0.8);
    cursor: pointer;
  }
`

export const StartDate = styled.div`
  display: flex;
  align-items: center;
  .date-icon {
    color: rgba(19, 101, 255, 0.8);
    margin-right: 10px;
  }
  .date {
  }
`

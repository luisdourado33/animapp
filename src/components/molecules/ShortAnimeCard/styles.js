import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const PosterImage = styled.img.attrs(() => ({
  loading: 'lazy',
}))`
  height: 120px;
  border-radius: 15px;
  margin-right: 10px;
  margin-bottom: 10px;
`

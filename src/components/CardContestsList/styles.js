import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  margin-bottom: 40px;
  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1;
  `}
`

export const Title = styled.h2`
  margin-bottom: 20px;
  margin-top: 40px;
`
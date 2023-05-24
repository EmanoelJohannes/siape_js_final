import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;

  ${media.lessThan('medium')`
    padding-right: 16px;
    padding-left: 16px;
  `}
`

export const Welcome = styled.div`
  margin-top: 32px;
  margin-bottom: 24px;

  font-size: 32px;
  line-height: 140%;
  letter-spacing: 0.01em;
  color: #FFFFFF;

  > span {
    color: #88869F;
  }

  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
  `}
`

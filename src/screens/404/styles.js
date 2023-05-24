import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 40px;
  padding-left: 40px;
  max-width: 1400px;
  margin: 0 auto;

  ${media.lessThan('medium')`
    padding-right: 16px;
    padding-left: 16px;
  `}
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 62px;

  > h1 {
    font-size: 32px;
    font-weight: 600;
    line-height: 45px;
    letter-spacing: 0.01em;
    color: #FFFFFF;
    margin-bottom: 24px;
  }

  > span {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #77748c;
    margin-bottom: 24px;
  }
`

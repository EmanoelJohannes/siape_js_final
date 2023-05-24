import styled from 'styled-components'
import media from 'styled-media-query'

export const SocialButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;

  ${media.lessThan('medium')`
    justify-content: flex-start;
  `}
`

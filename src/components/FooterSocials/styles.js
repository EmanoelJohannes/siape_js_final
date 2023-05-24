import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import {
  Twitter,
  InstagramAlt,
  FacebookCircle,
  Linkedin
} from '../../../assets/icons'

export const SocialButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;

  ${media.lessThan('medium')`
    justify-content: flex-start;
  `}
`

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  text-align: center;

  background-color: ${({ theme }) => theme.colors.darkBackgroundLighter};

  margin-right: 10px;
  border-radius: 10px;

  &:hover {
    background-color: ${props => props.hoverColor};
    cursor: pointer;
  }
`

const iconCSS = css`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: #FFFFFF;
`

export const TwitterIcon = styled(Twitter)`
  ${iconCSS}
`

export const InstagramIcon = styled(InstagramAlt)`
  ${iconCSS}
`

export const FacebookIcon = styled(FacebookCircle)`
  ${iconCSS}
`

export const LinkedinIcon = styled(Linkedin)`
  ${iconCSS}
`

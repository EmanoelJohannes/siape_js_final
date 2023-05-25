import styled, { css } from 'styled-components'
import {
  Help,
  Notifications,
  Twitter,
  InstagramAlt,
  DiscordAlt,
  Android,
  Apple,
  Email,
  Lightbulb
} from '../../../assets/icons'

import media from 'styled-media-query'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #282834;

    > svg {
      fill: #ffffff;
    }
  }
`

export const HelpIcon = styled(Help)`
  width: 18px;
  height: 18px;

  fill: #88869f;
`

export const PopoverMenu = styled.div`
  width: 280px;
  background: #14141a;
  border: 1px solid #282834;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  padding: 12px;
  z-index: 3;
  margin-top: 20px;

  ${media.greaterThan('medium')`
    margin-right: 120px;
  `}
`

export const MenuButton = styled.a`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: #88869f;
  width: 100%;

  > span {
    margin-left: 8px;
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 12px;

      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
    }

    padding-right: 10px;
  }

  padding: 12px;
  outline: 0;

  & + button {
    margin-top: 4px;
  }

  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background: #282834;
  }

  &:hover {
    span {
      color: #ffffff;
    }
  }

  &.active {
    background: #282834;

    span {
      color: #ffffff;
    }

    svg {
      color: #ffd789;
      fill: #ffd789;
    }
  }
`

const iconCSS = css`
  flex-shrink: 0;

  width: 18px;
  height: 18px;
  color: #88869f;
`

export const NotificationsIcon = styled(Notifications)`
  ${iconCSS}
`

export const TwitterIcon = styled(Twitter)`
  ${iconCSS}
`

export const InstagramIcon = styled(InstagramAlt)`
  ${iconCSS}
`

export const DiscordIcon = styled(DiscordAlt)`
  ${iconCSS}
`

export const AndroidIcon = styled(Android)`
  ${iconCSS}
`

export const LightbulbIcon = styled(Lightbulb)`
  ${iconCSS}
`

export const EmailIcon = styled(Email)`
  ${iconCSS}
`


export const Divisor = styled.hr`
  width: 100%;
  border: 1px solid #282834;
  border-radius: 12px;
  margin: 8px 0;
`

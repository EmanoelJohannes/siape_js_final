import styled, { css } from 'styled-components'
import {
  HomeAlt,
  Inbox,
  SportsEsports,
  Gamepad,
  Settings
} from '../../../assets/icons'

import media from 'styled-media-query'

export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  background: #14141a;
  width: 100%;

  display: flex;
  justify-content: space-between;

  padding: 8px 16px;

  ${media.greaterThan('medium')`
    display: none;
  `}
`

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: #88869f;

  padding: 12px;
  outline: 0;

  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background: #282834;
  }

  &.active {
    background: #282834;

    svg {
      color: #ffd789;
      fill: #ffd789;
    }
  }
`

const iconCSS = css`
  flex-shrink: 0;

  width: 25px;
  height: 25px;
  color: #88869f;
`

export const HomeIcon = styled(HomeAlt)`
  ${iconCSS}
`

export const DashboardIcon = styled(Inbox)`
  ${iconCSS}
`

export const FantasyIcon = styled(SportsEsports)`
  ${iconCSS}
`

export const PredictionsIcon = styled(Gamepad)`
  ${iconCSS}
`

export const SettingsIcon = styled(Settings)`
  ${iconCSS}
`

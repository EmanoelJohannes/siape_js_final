import styled, { css } from 'styled-components'
import { NotificationsRounded, Help } from '../../../assets/icons'
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

export const NotificationsIcon = styled(NotificationsRounded)`
  width: 18px;
  height: 18px;

  fill: #88869f;
`

export const PopoverMenu = styled.div`
  width: 420px;
  background: #14141a;
  border: 1px solid #282834;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  padding: 12px;
  z-index: 3;
  margin-top: 20px;

  ${media.greaterThan('medium')`
    margin-right: 70px;
  `}

  ${media.lessThan('medium')`
    width: 100%;
  `}
`

export const IconContainer = styled.div`
  width: 35px;
  height: 35px;
  background: #282834;
  border-radius: 4px;
  margin-right: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
`


export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  > p {
    font-size: 14px;
    font-weight: bold;
    text-align: start;
    color: #DDD;
  }

  > span {
    color: ${({ theme }) => theme.colors.darkText};
    font-size: 12px !important;
  }
`

export const MenuButton = styled.a`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: #88869f;
  width: 100%;
  background: ${({ theme }) => theme.colors.darkBackground};
  margin-bottom: 12px;

  > span {
    display: none;
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
    background: ${({ theme }) => theme.colors.darkBackground2};
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

export const HelpIcon = styled(Help)`
  ${iconCSS}
`

export const Divisor = styled.hr`
  width: 100%;
  border: 1px solid #282834;
  border-radius: 12px;
  margin: 8px 0;
`
export const ViewAllButon = styled.span`
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: #ffd789;
  font-size: 14px !important;

  &:hover {
    opacity: 0.8;
  }
`

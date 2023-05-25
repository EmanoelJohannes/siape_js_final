import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import {
  HomeAlt,
  Gamepad,
  Settings,
  Inbox
} from '../../../assets/icons'

export const Container = styled.div`
  display: none;

  ${media.greaterThan('medium')`
    width: 256px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    position: sticky;
    top: 0;
    left: 0;

    padding: 12px;

    max-height: 100vh;
    overflow-y: auto;

    background: ${({ theme }) => theme.colors.blackBackground};
  `}

  @media (max-width: 1280px) {
    max-width: 80px;
  }
`;

export const Topside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  ${media.lessThan('medium')`
    align-items: flex-start;
  `};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;

  width: 100%;
  margin-bottom: 12px;

  > span {
    font-size: 18px;
    font-weight: bold;
    line-height: 21px;
    color: ${({ theme }) => theme.colors.textPrimaryLight};
  }
`;

export const MenuButton = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: #88869f;
  width: 100%;
  margin-bottom: 6px;

  > span {
    display: none;
  }

  justify-content: center;

  @media (min-width: 1280px) {
    display: flex;
    justify-content: flex-start;

    > span {
      display: inline;
      margin-left: 12px;

      font-weight: bold;
      font-size: 14px;
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

    > svg {
      transform: rotate(15deg);
    }
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
`;

const iconCSS = css`
  flex-shrink: 0;

  width: 25px;
  height: 25px;
  color: #88869f;
`;

export const HomeIcon = styled(HomeAlt)`
  ${iconCSS}
`;

export const SettingsIcon = styled(Settings)`
  ${iconCSS}
`;

export const Divisor = styled.hr`
  width: 100%;
  border: 0.5px solid #282834;
  border-radius: 12px;
  margin: 8px 0;
`;

export const MenuHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12px;

  > span {
    font-size: 12px;
    line-height: 18px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #88869f;
  }

  ${media.lessThan('medium')`
    display: none;
  `}
`;

export const SubMenuButton = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: #88869f;
  width: 100%;
  margin-bottom: 6px;

  > span {
    display: none;
  }

  justify-content: center;

  @media (min-width: 1280px) {
    display: flex;
    justify-content: flex-start;

    > span {
      display: inline;
      margin-left: 12px;
      text-align: start;

      font-weight: bold;
      font-size: 14px;
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
`;

export const Wallet = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid #282834;
  border-radius: 8px;
  padding: 16px;

  > div {
    > p {
      font-weight: 400;
      font-size: 14px;
      color: #88869f;
      margin-bottom: 6px;
    }

    > span {
      font-weight: 600;
      font-size: 16px;
      letter-spacing: 0.01em;
      color: #ffffff;
    }
  }

  button {
    padding: 10px 22px;

    border: 1px solid #88869f;
    border-radius: 6px;

    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.005em;
    text-align: center;
    color: #ffffff;

    cursor: pointer;

    &:hover {
      background-color: rgb(30 30 39);
    }
  }

  @media (max-width: 1280px) {
    display: none;
  }
`;

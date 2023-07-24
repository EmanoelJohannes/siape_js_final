import styled from 'styled-components'
import media from 'styled-media-query'

import {
  Search,
  Home,
  KeyboardArrowRight,
  KeyboardArrowLeft
} from '../../../assets/icons'

export const Container = styled.header`
  z-index: 100;
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.colors.blackBackground};
  padding: 0 1.25rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  text-align: left;

  border-bottom: 1px solid #ccc;
  width: 100%;
  margin-bottom: 20px;

  > button {
    padding: 8px;
    border-radius: 50%;

    outline: 0;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.colors.darkHover};
    }
  }
`

export const BackIcon = styled(Home)`
  width: 24px;
  height: 24px;

  fill: ${({ theme }) => theme.colors.secondary};
`

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

export const HomeIcon = styled(Home)`
  flex-shrink: 0;

  width: 20px;
  height: 20px;
  color: #ffffff;
`

export const BarWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  ${media.lessThan('medium')`
    display: none;
  `}
`

export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 72px;

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    background: #1e1e27;

    cursor: pointer;

    &:hover {
      background: #282834;
    }
  }
`

export const SearchWrapper = styled.div`
  padding: 10px 24px;
  width: 100%;
  top: 0;
  z-index: 2;
  background: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  height: 64px;
`

export const SearchInput = styled.input`
  width: 100%;
  height: 48px;
  font-size: 16px;
  line-height: 24px;
  padding: 0 17px;
  padding-left: 50px;
  border-radius: 6px;

  &::placeholder {
    color: #88869f;
  }

  ~ svg {
    position: relative;
    top: -33px;
    left: 15px;
    z-index: 1;

    transition: 180ms ease-in-out;
  }

  outline: 0;

  &:hover {
    background: #1e1e27;
  }

  &:focus {
    background: #1e1e27;

    ~ svg {
      fill: #ffd789;
    }
  }
`

export const SearchIcon = styled(Search)`
  width: 20px;
  height: 20px;

  fill: #88869f;
`

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const ButtonWrapper = styled.div`
  margin: 0 8px;
`

export const InterrogationIcon = styled(Home)`
  width: 30px;
  height: 30px;

  cursor: pointer;

  fill: white;

  &:hover,
  &.active {
    fill: ${({ theme }) => theme.colors.secondary};
  }
`

export const NextIcon = styled(KeyboardArrowRight)`
  width: 16px;
  height: 16px;
  cursor: pointer;
  fill: white;
`

export const PreviousIcon = styled(KeyboardArrowLeft)`
  width: 16px;
  height: 16px;
  cursor: pointer;
  fill: white;
`

export const StattrakIcon = styled.div`
  margin-right: auto;

  ${media.greaterThan('medium')`
    display: none;
  `}
`

export const Desktop = styled.div`
  display: flex;

  ${media.lessThan('medium')`
    display: none;
  `}
`

export const Mobile = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${media.greaterThan('medium')`
    display: none;
  `}
`

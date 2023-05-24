import styled, { css } from 'styled-components'
import { PeopleTeam, GameController, Sword } from '../../../assets/icons'
import media from 'styled-media-query'

export const Header = styled.header`
  width: 100%;
  height: 450px;
  border-radius: 15px;
  margin-bottom: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.85)
    ),
    url('https://static.metafy.gg/background-sm-light.png') no-repeat center;
  
  ${media.lessThan('medium')`
    height: auto;
    padding: 12px;
  `}

  > div {
    max-width: 800px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 30px;

    ${media.lessThan('medium')`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
    `}
  }

  > h2 {
    font-size: 26px;
    margin-bottom: 10px;
    ${media.lessThan('medium')`
      text-align: center;
      margin-top: 16px;
      font-size: 22px;
    `}
  }
  > span {
    font-size: 16px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.darkText};
  }

  
`

export const ItemHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 200px;
  text-align: center;
  margin-top: 40px;

  > svg {
    width: 40px;
    height: 40px;

    ${media.lessThan('medium')`
      width: 30px;
      height: 30px;
    `}
  }

  > div {
    > h3 {
      color: #eee;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    > span {
      color: ${({ theme }) => theme.colors.darkText};
    } 

    ${media.lessThan('medium')`
      display: flex;
      flex-direction: column;
      text-align: left;
      margin-left: 12px;
    `}
  }
  
  ${media.lessThan('medium')`
    flex-direction: row;
    margin: 0;
    padding: 0;
    max-width: 100%;
  `}
`

const iconCSS = css`
  flex-shrink: 0;
  width: 25px;
  height: 25px;
  color: #88869f;
`

export const PeopleTeamIcon = styled(PeopleTeam)`
  ${iconCSS}
`

export const GameControllerIcon = styled(GameController)`
  ${iconCSS}
`

export const SwordIcon = styled(Sword)`
  ${iconCSS}
`

export const GetStartedButton = styled.button`
  padding: 17px 22px;
  border-radius: 80px;
  background-color: #6639e4;
  color: #fff;
  font-size: 16px;
  line-height: 1em;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 30px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  ${media.lessThan('medium')`
    padding: 12px 20px;
    font-size: 14px;
    width: 100%;
  `}
`

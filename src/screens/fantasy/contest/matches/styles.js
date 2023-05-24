import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 28px;

  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
  `}
`

export const Title = styled.h2`
  margin-top: 48px;
  margin-bottom: 36px;
`

export const DisplayRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > span {
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 0 3px;
  }
`

export const DisplayColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const TeamMatchLogo = styled.img`
  height: 16px;
  width: 16px;
  margin: 0 1rem;
`

export const Match = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.darkBackgroundLighter};
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  margin-bottom: 8px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.darkBackground};
    transition: 0.2s;
  }
`

export const Scoreboard = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MatchTeamsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TeamMatche = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    font-size: .75rem;
    line-height: 1.25rem;
    font-weight: 600
  }
`

export const MatchDate = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    font-size: .75rem;
    font-weight: 600;
    line-height: 1.25rem;
    color: ${({ theme }) => theme.colors.textPrimary}
  }

  > p {
    font-size: .75rem;
    line-height: 1.25rem;
    color: ${({ theme }) => theme.colors.darkText}
  }
`

export const MatchInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > span {
    font-size: .75rem;
    font-weight: 600;
    line-height: 1.25rem;
    color: ${({ theme }) => theme.colors.textPrimary}
  }

  > p {
    font-size: .75rem;
    line-height: 1.25rem;
    color: ${({ theme }) => theme.colors.darkText}
  }
`

export const TeamsContainer = styled.div`
  /* display: flex;
  max-width: 740px;
  overflow-x: scroll;
  object-fit: contain;
  padding-bottom: 8px;

  &::-webkit-scrollbar {
    height: 6px;
    border-radius: 10px;
  } */

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`

export const Team = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.darkBackgroundLighter};
    border-radius: 8px;
  }

  > span {
    font-size: 12px;
    line-height: 1rem;
    font-weight: 700;
    margin-top: 12px;
  }
`

export const TeamLogo = styled.img`
  height: 60px;
  width: 60px;
  padding: 5px;
`
export const SideBarContainer = styled.div`
  position: sticky;
  height: fit-content;
  top: 80px;
`

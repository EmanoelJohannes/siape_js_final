import styled from 'styled-components'

export const Match = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.darkBackgroundLighter};
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  margin-bottom: 8px;
`

export const MatchDate = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1.25rem;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  > p {
    font-size: 0.75rem;
    line-height: 1.25rem;
    color: ${({ theme }) => theme.colors.darkText};
  }
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
    font-size: 0.75rem;
    line-height: 1.25rem;
    font-weight: 600;
  }
`

export const TeamMatchLogo = styled.img`
  height: 16px;
  width: 16px;
  margin: 0 1rem;
`

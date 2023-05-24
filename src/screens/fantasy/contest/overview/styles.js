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

export const TournamentFormat = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 48px;

  > h2 {
    font-weight: bold;
  }
`

export const TournamentInfosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 16px;
`

export const TournamentInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: left;

  > p {
    color: ${({ theme }) => theme.colors.darkText};
    margin-bottom: 5px;
    font-size: 12px !important;
    font-weight: bold;
  }

  > span {
    font-weight: bold;
  }
`

export const TournamentScouts = styled.div`
  border: 1px solid #323241;
  border-radius: 12px;
`

export const Scout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid #323241;

  > span {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #ffffff;
    text-transform: capitalize;
  }

  > p {
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.01em;
    color: #77748C;
  }
`

export const SideBarContainer = styled.div`
  position: sticky;
  height: fit-content;
  top: 80px;
`

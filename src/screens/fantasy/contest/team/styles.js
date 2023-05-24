import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 48px;

  > h2 {
    font-weight: bold;
  }
`

export const Content = styled.div`
  display: flex;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

export const Lineup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  position: sticky;
  align-self: flex-start;
  top: 80px;

  margin-right: 24px;

  ${media.lessThan('medium')`
    position: inherit;
    width: 100%;
    margin-bottom: 24px;
  `}
`

export const JoinTournamentButton = styled.button`
  height: 40px;
  width: 170px;
  text-align: center;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.yellowLight};
  font-weight: bold;
  cursor: pointer;
  z-index: 10;
  margin-top: 28px;

  &:hover {
    opacity: 0.8;
  }
`

export const JoinTournamentContainer = styled.div`
  width: 100%;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
import styled from 'styled-components'
import media from 'styled-media-query'

import { Minus } from '../../../../../../assets/icons'

export const Container = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;

  > button {
    width: 100%;
    margin-right: 12px;
  }

  button:last-child {
    margin: 0;
  }

  ${media.lessThan('medium')`
    margin-top: 12px;
    justify-content: flex-end;
  `}
`

export const LineUpContainer = styled.div`
  > h2 {
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 0.005em;
    color: #ffffff;
    margin-bottom: 20px;
  }
`

export const MinusIcon = styled(Minus)`
  width: 15px;
  height: 15px;
`

export const PlayerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;

  cursor: pointer;

  background: #14141a;
  padding: 10px;
  transition: 0.2s;

  border-radius: 5px;
  &:hover {
    background: ${({ theme }) => theme.colors.darkBackground2};

    .score {
      background: #282834;
    }
  }
`

export const PlayerMarketName = styled.span`
  margin-bottom: 4px;
  font-weight: bold;
`

export const PlayerMarketTeam = styled.span`
  display: flex;
  color: ${({ theme }) => theme.colors.yellowLight};
  font-size: 12px;
`

export const PlayerMarketInfo = styled.div`
  display: flex;
  flex-direction: row !important;

  > img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 10px;
    background: ${({ theme }) => theme.colors.yellowLight};
  }
`

export const DisplayRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const DisplayColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ButtonPlayer = styled.button`
  width: 35px;
  height: 35px;
  padding: 10px;
  border-radius: 5px;
  margin-left: 10px;

  cursor: pointer;

  background: #F5ADBA;

  &:hover {
    opacity: 0.8;
  }
`

export const Dot = styled.div`
  width: 5px;
  height: 5px;
  background: gray;
  border-radius: 50%;
  margin-right: 6px;
  margin-left: 6px;
  display: flex;
  align-self: center;
`

export const PlayerScore = styled.div`
  background: #1e1e27;
  border-radius: 4px;
  padding: 10px 16px;
  margin-left: auto;

  font-weight: 600;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
`

export const PlayerImage = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;

  & > span {
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.yellowLight};
  }
`

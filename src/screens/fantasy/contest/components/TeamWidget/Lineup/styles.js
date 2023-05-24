import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 12px;
`

export const Player = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
  padding: 12px;

  &:hover {
    background: #1e1e27;
    border-radius: 8px;

    .score {
      background: #282834;
    }
  }
`

export const PlayerInfo = styled.div`
  display: flex;

  > img {
    height: 42px;
    width: 42px;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 10px;
  }

  > div {
    display: flex;
    flex-direction: column;

    > p {
      margin-bottom: 8px;
    }

    > span {
      color: ${({ theme }) => theme.colors.yellowLight};
      font-size: 12px !important;
    }
  }
`

export const PlayerScore = styled.div`
  background: #1e1e27;
  border-radius: 4px;
  padding: 16px;
  margin-left: auto;

  font-weight: 600;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
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
  }
`

export const PlayerMarketName = styled.span`
  margin-bottom: 4px;
  font-weight: bold;
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

export const PlayerInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

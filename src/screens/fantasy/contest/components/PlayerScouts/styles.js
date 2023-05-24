import styled from 'styled-components'
import {
  Search,
  DotsHorizontalRounded,
  Check
} from '../../../../../../assets/icons'

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const PlayerMarketContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: 10px;
  margin-bottom: 40px;

  > h2 {
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 0.005em;
    color: #FFFFFF;
    margin-bottom: 20px;
  }
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

export const PlayerMarketTeam = styled.span`
  display: flex;
  color: ${({ theme }) => theme.colors.yellowLight};
  font-size: 12px;
`

export const PlayerMarketAvg = styled.span`
  color: ${({ theme }) => theme.colors.darkText};
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
`

export const DisplayColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const SearchInput = styled.input`
  width: 100%;
  height: 48px;
  font-size: 16px;
  line-height: 24px;
  padding: 0 17px;
  padding-left: 50px;
  border-radius: 6px;
  color: white;
  background: ${({ theme }) => theme.colors.darkBackground2};

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
    background: ${({ theme }) => theme.colors.blackBackground};
  }

  &:focus {
    background: ${({ theme }) => theme.colors.blackBackground};

    ~ svg {
      fill: #ffd789;
    }
  }
`

export const SearchIcon = styled(Search)`
  width: 20px;
  height: 20px;
`

export const DotsIcon = styled(DotsHorizontalRounded)`
  width: 15px;
  height: 15px;
  color: white;
`

export const CheckIcon = styled(Check)`
  width: 15px;
  height: 15px;
`

export const ButtonPlayer = styled.button`
  width: 35px;
  height: 35px;
  padding: 10px;
  border-radius: 5px;
  margin-left: 10px;

  cursor: pointer;

  background: ${props => props.backgroundColor};

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

export const PlayerImage = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;

  & > span {
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.yellowLight};
  }
`

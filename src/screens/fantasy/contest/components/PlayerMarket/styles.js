import styled, { css } from 'styled-components'
import {
  Search,
  Check,
  Minus,
  KeyboardArrowDown
} from '../../../../../../assets/icons'

export const AccordionInner = styled.div`
  position: relative;
  width: 100%;
`

export const AccordionItem = styled.div`
  background: #14141a;
  border-radius: 4px;
  margin-bottom: 12px;
  position: relative;
`

export const AccordionBody = styled.div`
  display: block;
  position: relative;
  padding: 0;
  margin: 0;
  height: 0;
  overflow: hidden;
  transition: height 0.3s;

  ${({ active, bodyHeight }) =>
    active &&
    css`
      height: ${bodyHeight}px;
    `}
`

export const PlayerMarketContainer = styled.div`
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: 10px;
  margin-bottom: 40px;

  > h2 {
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 0.005em;
    color: #ffffff;
    margin-bottom: 20px;
  }
`

export const PlayerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

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

export const PlayerMarketAvg = styled.span`
  color: ${({ theme }) => theme.colors.darkText};
  font-size: 12px;
`

export const PlayerMarketInfo = styled.div`
  display: flex;
  flex-direction: row !important;
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

export const DisplayRow = styled.div`
  display: flex;
  flex-direction: row;

  &:hover {
    .score {
      background: #282834;
    }
  }
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

export const CheckIcon = styled(Check)`
  width: 15px;
  height: 15px;
`

export const MinusIcon = styled(Minus)`
  width: 15px;
  height: 15px;
`

export const ButtonPlayer = styled.button`
  width: 35px;
  height: 35px;
  padding: 10px;
  border-radius: 5px;
  margin-left: 10px;
  background: ${props => props.backgroundColor};

  cursor: pointer;

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

export const AccordionContent = styled.p`
  margin: 0;
  padding: 1.5rem;
  height: auto;
  color: #818098;
  font-size: 15px;
  border-top: 1px solid #1e1e27;

  > ul {
    list-style: none;
    margin-top: 12px;

    > li {
      display: flex;
      justify-content: space-between;

      padding: 14px 12px;
      background: #1e1e27;
      border-radius: 6px;
      margin-bottom: 14px;

      font-weight: 500;
      font-size: 14px;
      letter-spacing: 0.005em;
      color: #ffffff;
      text-transform: capitalize;

      > p {
        font-weight: 500;
        font-size: 14px;
        letter-spacing: 0.005em;
        color: #88869f;
      }
    }
  }

  > p {
    font-weight: 500;
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #88869f;

    margin-bottom: 12px;
  }
`

export const SetModalButton = styled.button`
  background: #1e1e27;
  width: 35px;
  height: 35px;
  padding: 8px;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledChevron = styled(KeyboardArrowDown)`
  color: white;
  transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
  transform: ${props => (props.active ? 'rotate(180deg)' : '')};
  height: 25px;
  width: 25px;
`

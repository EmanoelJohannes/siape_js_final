import Modal from 'styled-react-modal'
import styled from 'styled-components'
import media from 'styled-media-query'

import { Close, Bitcoin } from '../../../../../assets/icons'

export const StyledModal = Modal.styled`
  height: auto;
  width: 400px;
  transition : all 0.3s ease-in-out;
  background: ${({ theme }) => theme.colors.darkBackground2};
  border-radius: 10px;
  position: relative;

  ${media.lessThan('medium')`
    height: 100vh;
    width: 100vw;
  `}

`

export const BitcoinIcon = styled(Bitcoin)`
  width: 24px;
  height: 24px;
`

export const CloseIcon = styled(Close)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  fill: white;
  position: absolute;
  top: 10px;
  right: 10px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: 100%;
  width: 100%;
  padding: 20px 30px;
`


export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
  border: 1px solid ${({ theme }) => theme.colors.outline};
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 20px;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  > span {
    color: ${({ theme }) => theme.colors.darkText};
  }
`

export const Amount = styled.span`
  color: #EEE;
  font-size: 18px;
  margin-left: 12px;
`

export const IconBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 12px;
  background: ${({ theme }) => theme.colors.blackBackground};
`

export const Divisor = styled.hr`
  width: 100%;
  border: 1px solid #282834;
  border-radius: 12px;
  margin: 8px 0;
`


export const BottomCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0;

  > span {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.darkText};
  }

  > p {
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.yellowLight};
  }
`

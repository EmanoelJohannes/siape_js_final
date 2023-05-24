import styled from 'styled-components'
import media from 'styled-media-query'

import { Settings, Plus, Minus, Bitcoin } from '../../../assets/icons'

export const Container = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  margin-top: 32px;
  margin-bottom: 48px;
`

export const MainWrapper = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 28px;

  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
  `}
`

export const MyWallet = styled.div`
  background: #1E1E27;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 28px;

  display: flex;
  flex-direction: column;
`

export const WalletContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;

  > img {
    height: 88px;
    width: 88px;
    background: #282834;
    border-radius: 16px;
    margin-right: 25px;
  }

  > div {
    flex-direction: column;
    color: ${({ theme }) => theme.colors.darkText};

    > p {
      font-weight: 400;
      font-size: 16px;
      margin-bottom: 7px;
      color: #77748C;
    }

    > span {
      font-weight: 600;
      font-size: 32px;
      letter-spacing: 0.01em;
      color: #FFFFFF;
    }
  }
`

export const WalletButton = styled.button`
  width: 100%;
  border-radius: 8px;
  padding: 12px;
  background: #FFD789;
  margin-top: 16px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 400;
  font-size: 14px;
  color: #14141A;
  text-align: center;


  &:hover {
    background: #FFD27B;
  }
`

export const SettingsIcon = styled(Settings)`
  height: 28px;
  color: ${({ theme }) => theme.colors.darkText};
  margin-right: 4px;
`

export const PaymentContainer = styled.div`
  background: ${({ theme }) => theme.colors.darkBackground};
  border-radius: 8px;
  padding: 20px;

  display: flex;
  flex-direction: column;

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.colors.darkText};
    width: 100%;
    margin-bottom: 4px;

    > h2 {
      color: white;
    }
  }

  > span {
    color: ${({ theme }) => theme.colors.darkText};
    font-size: 12px !important;
    margin-top: 8px;
  }
`

export const PaymentWallet = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  border: 1px solid #323241;
  border-radius: 8px;
  padding: 14px;
  margin-top: 20px;
  margin-bottom: 12px;

  > span {
    border-radius: 8px;
  }

  > div {
    flex-direction: column;
    color: ${({ theme }) => theme.colors.darkText};
    margin-left: 18px;

    > p {
      font-weight: 400;
      font-size: 16px;
      color: #FFFFFF;
    }

    > span {
      font-weight: 400;
      font-size: 14px;
      color: #77748C;
      margin-top: 3px;
    }
  }
`

export const PaymentWalletBlankState = styled.div`
  display: flex;
  flex-direction: column;

  > h3 {
    font-weight: bold;
    margin-bottom: 12px;
  }

  > span {
    color: ${({ theme }) => theme.colors.darkText};
    margin-bottom: 12px;
  }

  > p {
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.yellowLight};
    font-size: 14px;
    width: fit-content;

    &:hover {
      opacity: 0.8;
    }
  }
`

export const TransactionsContainer = styled.div`
  background: ${({ theme }) => theme.colors.darkBackground2};
  border-radius: 8px;
  padding: 32px 40px;

  display: flex;
  flex-direction: column;

  ${media.lessThan('medium')`
    padding: 20px 10px;
  `}

  > h2 {
    ${media.lessThan('medium')`
      padding: 0px 10px;
    `}
  }

  section:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkBackground};
  }
`

export const Transaction = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.outline};
  cursor: pointer;
  padding: 20px;
  margin-top: 12px;

  ${media.lessThan('medium')`
    margin-top: 0px;
    padding: 20px 10px;
  `}

  &:hover {
    background: ${({ theme }) => theme.colors.darkBackgroundLighter};
    border-radius: 8px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkBackground};
  }
`

export const TransactionBlankState = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;

  > h2 {
    color: ${({ theme }) => theme.colors.yellowLight};
    font-size: 16px;
    margin-top: 16px;
  }

  > span {
    text-align: center;
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.darkText};
    max-width: 380px;
  }
`


export const TransactionUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > img {
    height: 44px;
    width: 44px;
    border-radius: 8px;
    margin-right: 16px;
  }

  > div {
    flex-direction: column;

    > p {
      font-size: 16px;
      font-weight: bold;
      color: white;
      margin-bottom: 4px;
    }

    > span {
      color: ${({ theme }) => theme.colors.darkText};
      font-size: 14px;
    }
  }
`

export const TransactionCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #14141A;
  border-radius: 12px;
  margin-right: 16px;
  padding: 19px;
`

export const TransactionInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const TransactionValue = styled.span`
  color: ${props => (props.type == 'deposit' ? '#FFFFFF' : '#77748C')};
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`

export const TransactionType = styled.span`
  color: #77748c;
  font-weight: 400;
  font-size: 12px;
`

export const AddIcon = styled(Plus)`
  height: 24px;
  width: 24px;
  color: #6d6a80;
`

export const MinusIcon = styled(Minus)`
  height: 24px;
  width: 24px;
  color: #6d6a80;
`

export const BitcoinIcon = styled(Bitcoin)`
  height: 88px;
  width: 88px;
  background: #282834;
  border-radius: 16px;
  margin-right: 25px;
`

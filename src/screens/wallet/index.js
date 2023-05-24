import React, { useState } from 'react'
import Image from 'next/image'
import { format } from 'date-fns'

import { useAuth } from '@/hooks/useAuth'

import Button from '@/components/Button'
import WithdrawalModal from './components/WithdrawalModal'
import WalletModal from './components/WalletModal'

import {
  Container,
  MainWrapper,
  MyWallet,
  WalletContent,
  PaymentContainer,
  PaymentWallet,
  PaymentWalletBlankState,
  TransactionsContainer,
  SettingsIcon,
  Transaction,
  TransactionBlankState,
  TransactionCard,
  TransactionUser,
  TransactionInfo,
  TransactionValue,
  TransactionType,
  AddIcon,
  MinusIcon,
  BitcoinIcon
} from './styles'

export default function Wallet({ wallet, extracts }) {
  const { user } = useAuth()

  const [isOpenWithdrawalModal, setIsOpenWithdrawalModal] = useState(false)
  const [isOpenWalletModal, setIsOpenWalletModal] = useState(false)

  let toggleWithdrawalModal = () => {
    setIsOpenWithdrawalModal(!isOpenWithdrawalModal)
  }

  let toggleWalletModal = () => {
    setIsOpenWalletModal(!isOpenWalletModal)
  }

  return (
    <Container>
      <h1>My Wallet</h1>

      <WithdrawalModal
        isOpen={isOpenWithdrawalModal}
        toggle={toggleWithdrawalModal}
      />
      <WalletModal isOpen={isOpenWalletModal} toggle={toggleWalletModal} />

      <MainWrapper>
        <div>
          <MyWallet>
            <WalletContent>
              <BitcoinIcon />
              <div>
                <p>Avaliable Balance (SATS)</p>
                <span>{user?.stats}</span>
              </div>
            </WalletContent>
            <Button
              disabled={user?.stats == 0}
              fullWidth
              onClick={toggleWithdrawalModal}
            >
              Withdraw
            </Button>
          </MyWallet>

          <PaymentContainer>
            {wallet ? (
              <>
                <header>
                  <h2>Payout method</h2>
                </header>

                <span>Your balance will be withdrawn to this account.</span>
                <PaymentWallet>
                  <Image
                    width={56}
                    height={56}
                    src="/zbd_logo.png"
                    alt="ZBD Logo"
                  />
                  <div>
                    <p>{wallet.address}@zbd.gg</p>
                    <span>
                      Connected on {format(new Date(wallet.createdAt), 'PP')}
                    </span>
                  </div>
                </PaymentWallet>

                <Button fullWidth onClick={toggleWalletModal}>
                  Change Wallet
                </Button>
              </>
            ) : (
              <PaymentWalletBlankState>
                <h3>No payment wallet</h3>
                <span>You haven&apos;t added any wallet yet.</span>
                <p onClick={toggleWalletModal}>Add payment wallet</p>
              </PaymentWalletBlankState>
            )}
          </PaymentContainer>
        </div>

        <TransactionsContainer>
          <h2>Transactions</h2>

          {extracts.length > 0 ? (
            <>
              {extracts.map(item => {
                const type = item.stats >= 0 ? 'deposit' : 'withdraw'

                return (
                  <Transaction key={item.id}>
                    <TransactionUser>
                      <TransactionCard>
                        {type == 'deposit' ? <AddIcon /> : <MinusIcon />}
                      </TransactionCard>
                      <div>
                        <p>{type == 'deposit' ? 'Deposit' : 'Withdraw'}</p>
                        <span>{format(new Date(item.createdAt), 'PP')}</span>
                      </div>
                    </TransactionUser>

                    <TransactionInfo>
                      <TransactionValue type={type}>
                        {type == 'deposit' ? '+' : '-'}
                        {item.stats}
                      </TransactionValue>
                      <TransactionType>SATS</TransactionType>
                    </TransactionInfo>
                  </Transaction>
                )
              })}
            </>
          ) : (
            <TransactionBlankState>
              <h2>You don&apos;t have any transations yet.</h2>
              <span>
                Looks like you don&apos;t have any transactions to show, all
                your transactions will be displayed here once you have them.
              </span>
            </TransactionBlankState>
          )}
        </TransactionsContainer>
      </MainWrapper>
    </Container>
  )
}

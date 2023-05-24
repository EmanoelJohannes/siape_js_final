import React, { useState } from 'react'

import { useAuth } from '@/hooks/useAuth'
import { api } from '@/services/api'
import { useSnack } from '@/hooks/useSnack'

import Button from '@/components/Button'

import {
  StyledModal,
  Container,
  CloseIcon,
  BitcoinIcon,
  Divisor,
  Card,
  IconBackground,
  Amount,
  BottomCard
} from './styles'

export default function WithdrawalModal(props) {
  const [loading, setLoading] = useState(false)

  const { user, refetch } = useAuth()
  const { showSuccessMessage, showErrorMessage } = useSnack()

  const { isOpen, toggle } = props

  const handleSubmit = async () => {
    try {
      setLoading(true)
      await api.post('/wallets/withdraw')

      refetch()

      showSuccessMessage('Operation Successful')
    } catch (error) {
      if (error?.response?.data) {
        return showErrorMessage(error.response.data.error)
      }

      return showErrorMessage('An error has occurred')
    } finally {
      setLoading(false)
      toggle()
    }
  }

  return (
    <StyledModal
      isOpen={isOpen}
      onBackgroundClick={toggle}
      onEscapeKeydown={toggle}
    >
      <Container>
        <CloseIcon onClick={toggle} />

        <Card>
          <div>
            <IconBackground>
              <BitcoinIcon />
            </IconBackground>

            <Amount>{user?.stats}</Amount>
          </div>
          <span>SATS</span>
        </Card>

        <Divisor />

        <BottomCard>
          <span>Avaliable Balance</span>
          <p>{user?.stats} SATS</p>
        </BottomCard>

        <Button loading={loading} onClick={handleSubmit} fullWidth>
          Withdraw
        </Button>
      </Container>
    </StyledModal>
  )
}

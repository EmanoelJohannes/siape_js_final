import React, { useState } from 'react'
import { Formik } from 'formik'

import { useAuth } from '@/hooks/useAuth'
import { api } from '@/services/api'
import { useSnack } from '@/hooks/useSnack'

import Button from 'components/Button'
import { InputField } from '../../../../components/Input'

import {
  StyledModal,
  Container,
  CloseIcon,
  Form,
  FormContainer
} from './styles'

export default function WalletModal(props) {
  const [loading, setLoading] = useState(false)

  const { user, refetch } = useAuth()
  const { showSuccessMessage, showErrorMessage } = useSnack()

  return (
    <StyledModal
      isOpen={props.isOpen}
      onBackgroundClick={props.toggle}
      onEscapeKeydown={props.toggle}
    >
      <Container>
        <CloseIcon onClick={props.toggle} />

        <h2>Your wallet</h2>

        <FormContainer>
          <Formik
            initialValues={{ gamertag: '' }}
            onSubmit={async values => {
              try {
                const { gamertag } = values

                setLoading(true)

                await api.post('/wallets', {
                  type: 'zebedee',
                  address: gamertag.toLowerCase()
                })

                refetch()

                showSuccessMessage('Operation Successful')
              } catch (error) {
                if (error?.response?.data) {
                  return showErrorMessage(error.response.data.error)
                }

                return showErrorMessage('An error has occurred')
              } finally {
                setLoading(false)
              }
            }}
            render={({ handleChange, handleSubmit, values }) => (
              <Form onSubmit={handleSubmit}>
                <InputField
                  type="text"
                  name="gamertag"
                  placeholder="Paste your wallet code here."
                  onChange={handleChange('gamertag')}
                  value={values.gamertag}
                />

                <Button>Save</Button>
              </Form>
            )}
          />
        </FormContainer>
      </Container>
    </StyledModal>
  )
}

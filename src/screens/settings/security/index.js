import React, { useState } from 'react'
import { Formik } from 'formik'
import { InputField } from '../../../components/Input'
import { Container as BootstrapContainer } from 'styled-bootstrap-grid'

import { api } from '@/services/api'
import { useSnack } from '@/hooks/useSnack'

import Button from '@/components/Button'

import {
  BottomForm,
  Form,
  Wrapper,
  FormContainer,
  SubmitButton,
  ArrowRightIcon,
  ReplaceImageButton,
  DeleteButton,
  InputRowWrapper
} from './styles'

export default function SecuritySettings() {
  const [loading, setLoading] = useState(false)

  const { showSuccessMessage, showErrorMessage } = useSnack()

  return (
    <BootstrapContainer>
      <FormContainer>
        <Formik
          initialValues={{
            oldPassword: '',
            newPassword: '',
            confirmPassword: ''
          }}
          onSubmit={async values => {
            try {
              setLoading(true)

              const { oldPassword, newPassword, confirmPassword } = values

              if (!oldPassword || !newPassword || !confirmPassword) {
                return showErrorMessage('Required fields')
              }

              if (newPassword !== confirmPassword) {
                return showErrorMessage('Passwords dont match')
              }

              await api.put('/users/password', {
                password: oldPassword,
                newPassword: newPassword
              })

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
              <h2>Password</h2>
              <Wrapper>
                <InputField
                  label="Current password"
                  type="text"
                  name="email"
                  placeholder="Type your current password"
                  onChange={handleChange('oldPassword')}
                  value={values.oldPassword}
                />
                <InputRowWrapper>
                  <InputField
                    label="New password"
                    name="password"
                    placeholder="At least 6 characteres please!"
                    onChange={handleChange('newPassword')}
                    value={values.newPassword}
                  />
                  <InputField
                    label="Confirm new password"
                    name="password"
                    placeholder="At least 6 characteres please!"
                    onChange={handleChange('confirmPassword')}
                    value={values.confirmPassword}
                  />
                </InputRowWrapper>
              </Wrapper>

              <BottomForm>
                <Button loading={loading}>Submit</Button>
              </BottomForm>
            </Form>
          )}
        />
      </FormContainer>
    </BootstrapContainer>
  )
}

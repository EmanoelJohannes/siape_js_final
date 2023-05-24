import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Formik } from 'formik'
import { useRouter } from 'next/router'

import { api } from '@/services/api'
import { useSnack } from '@/hooks/useSnack'

import Button from '@/components/Button'
import { InputField } from '../../components/Input'
import AccountPageImageAnimation from '../../components/AccountPageImageAnimation'

import {
  AccountText,
  BottomForm,
  Container,
  Form,
  Wrapper,
  FormContainer,
  FormWrapper,
  StattrakIcon,
  MainImage
} from './styles'

export default function RecoverCode() {
  const router = useRouter()
  const [loading, setLoading] = useState(null)

  const { showSuccessMessage, showErrorMessage } = useSnack()

  return (
    <Container>
      <AccountPageImageAnimation />
      <Wrapper>
        <MainImage>
          <Image
            src="/icon_branco_st_2.png"
            alt="Stattrak Logo"
            width={150}
            height={40}
          />
        </MainImage>

        <FormWrapper>
          <StattrakIcon>
            <Image
              src="/stattrak_branco.svg"
              alt="Stattrak Logo"
              width={250}
              height={120}
            />
          </StattrakIcon>
          <AccountText>
            <Link href="/auth/signin">Back to login</Link>
            Change Password
            <p>Enter your security code and your new password.</p>
          </AccountText>

          <FormContainer>
            <Formik
              initialValues={{ code: '', password: '' }}
              onSubmit={async values => {
                try {
                  setLoading(true)
                  const { code, password } = values
                  const { email } = router.query

                  if (!code || !password) {
                    return showErrorMessage('Required fields')
                  }

                  await api.post('/users/recover', {
                    email,
                    code,
                    password
                  })

                  showSuccessMessage('Operation Successful')
                  router.push('/auth/signin')
                } catch (error) {
                  showErrorMessage(error.message)
                } finally {
                  setLoading(false)
                }
              }}
              render={({ handleChange, handleSubmit, values }) => (
                <Form onSubmit={handleSubmit}>
                  <InputField
                    type="text"
                    name="code"
                    placeholder="Code"
                    onChange={handleChange('code')}
                    value={values.code}
                  />
                  <InputField
                    type="password"
                    name="password"
                    placeholder="New password"
                    onChange={handleChange('password')}
                    value={values.password}
                  />
                  <BottomForm>
                    <Button loading={loading}>Reset password</Button>
                  </BottomForm>
                </Form>
              )}
            />
          </FormContainer>
        </FormWrapper>
      </Wrapper>
    </Container>
  )
}

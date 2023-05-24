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

export default function SignIn() {
  const router = useRouter()
  const [loading, setLoading] = useState(null)

  const { showErrorMessage } = useSnack()

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
            Forgot your password?
            <p>
              Happens to all of us, but we&apos;ll help you reset your password.
              Enter the email associated with your account, we&apos;ll send you
              a link to reset password.
            </p>
          </AccountText>

          <FormContainer>
            <Formik
              initialValues={{ email: '' }}
              onSubmit={async values => {
                try {
                  setLoading(true)
                  const { email } = values

                  if (!email) {
                    return showErrorMessage('Required fields')
                  }

                  await api.post('/users/forgot', {
                    email
                  })

                  router.push(`/auth/recover?email=${email}`)
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
                    name="email"
                    placeholder="Email address"
                    onChange={handleChange('email')}
                    value={values.email}
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

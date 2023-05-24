import React, { useState, useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Formik } from 'formik'

import { AuthContext } from '@/context/AuthContext'
import { useSnack } from '@/hooks/useSnack'

import Button from '@/components/Button'
import { InputField } from '../../components/Input'
import Divider from '../../components/Divider'
import AccountPageImageAnimation from '../../components/AccountPageImageAnimation'
import { SocialLoginButtons } from '../../components/SocialLoginButtons'

import {
  AccountText,
  BottomForm,
  Container,
  Form,
  Wrapper,
  FormContainer,
  FormWrapper,
  StattrakIcon,
  SubmitButton,
  ArrowRightIcon,
  MainImage,
  DividerContainer
} from './styles'

export default function SignIn() {
  const { signIn } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)

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
            Don&apos;t have an account?
            <Link href="/auth/signup">Create one</Link>
          </AccountText>

          {/* <SocialLoginButtons /> */}

          <DividerContainer>
            <Divider text={'OR'} />
          </DividerContainer>

          <FormContainer>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={async values => {
                try {
                  setLoading(true)
                  const { email, password } = values

                  if (!email || !password) {
                    return showErrorMessage('Required fields')
                  }

                  await signIn({
                    email,
                    password
                  })
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
                    placeholder="Login"
                    onChange={handleChange('email')}
                    value={values.email}
                  />
                  <InputField
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange('password')}
                    value={values.password}
                  />
                  <BottomForm>
                    <Link href="/auth/forgot">Forgot password?</Link>
                    <SubmitButton>
                      <Button loading={loading}>
                        Login <ArrowRightIcon />
                      </Button>
                    </SubmitButton>
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

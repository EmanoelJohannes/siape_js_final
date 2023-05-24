import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { useAuth } from '@/hooks/useAuth'
import { useSnack } from '@/hooks/useSnack'

import Button from '@/components/Button'
import { InputField } from '../../components/Input'
import { SocialLoginButton } from '../../components/SocialLoginButton'

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
  SocialButtonsWrapper,
  PaddingWrapper,
  ArrowRightIcon,
  MainImage,
  DividerContainer
} from './styles'

import { Formik } from 'formik'

import { Google, Discord } from '../../../assets/icons'
import Divider from '../../components/Divider'
import AccountPageImageAnimation from '../../components/AccountPageImageAnimation'

export default function SignUp() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const { signUp } = useAuth()
  const { showErrorMessage } = useSnack()

  const handleSignUp = async ({
    email,
    username,
    password,
    confirmPassword
  }) => {
    try {
      setLoading(true)

      if (!email || !username || !password || !confirmPassword) {
        return showErrorMessage('Required fields')
      }

      if (password !== confirmPassword) {
        showErrorMessage('password confirm not match')
        return
      }

      await signUp({ email, username, password, teamname: `${username} team` })

      router.push('/account')
    } catch (error) {
      showErrorMessage(error.message)
    } finally {
      setLoading(false)
    }
  }

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
            Have an account?
            <Link href="/auth/signin">Login</Link>
          </AccountText>
          {/* <SocialButtonsWrapper>
            <SocialLoginButton url="#" icon={<Google />} hoverColor="rgb(234 67 53)" />
            <SocialLoginButton url="#" icon={<Google />} hoverColor="rgb(234 67 53)" />
            <SocialLoginButton url="#" icon={<Discord />} hoverColor="rgb(114 137 218)" />
            <SocialLoginButton url="#" icon={<Discord />} hoverColor="rgb(114 137 218)" />
          </SocialButtonsWrapper> */}

          <DividerContainer>
            <Divider text={'OR'} />
          </DividerContainer>

          <FormContainer>
            <Formik
              initialValues={{
                email: '',
                username: '',
                password: '',
                confirmPassword: ''
              }}
              onSubmit={handleSignUp}
              render={({ handleChange, handleSubmit, values }) => (
                <Form onSubmit={handleSubmit}>
                  <InputField
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange('email')}
                    value={values.email}
                  />
                  <InputField
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange('username')}
                    value={values.username}
                  />
                  <InputField
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange('password')}
                    value={values.password}
                  />
                  <InputField
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    onChange={handleChange('confirmPassword')}
                    value={values.confirmPassword}
                  />
                  <BottomForm>
                    <SubmitButton>
                      <Button loading={loading}>
                        Sign Up <ArrowRightIcon />
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

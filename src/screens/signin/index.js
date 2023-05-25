import React, { useState, useContext } from 'react'
import Link from 'next/link'
import { Formik } from 'formik'

import { AuthContext } from '@/context/AuthContext'
import { useSnack } from '@/hooks/useSnack'

import Button from '@/components/Button'
import { InputField } from '../../components/Input'
import Divider from '../../components/Divider'

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
  LoginTitle
} from './styles'

export default function SignIn() {
  const { signIn } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)

  const { showErrorMessage } = useSnack()

  return (
    <Container>
      <Wrapper>
        <FormWrapper>
          <LoginTitle>SIAPE - Login</LoginTitle>
          <AccountText>Entre em contato com o DEX para obter um login.</AccountText>

          <FormContainer>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={async (values) => {
                try {
                  setLoading(true);
                  const { email, password } = values;

                  if (!email || !password) {
                    return showErrorMessage('Required fields');
                  }

                  await signIn({
                    email,
                    password
                  });
                } catch (error) {
                  showErrorMessage(error.message);
                } finally {
                  setLoading(false);
                }
              }}
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
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange('password')}
                    value={values.password}
                  />
                  <BottomForm>
                    <Link href="/auth/forgot">Esqueceu a senha?</Link>
                    <SubmitButton>
                      <Button loading={loading}>
                        Entrar <ArrowRightIcon />
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

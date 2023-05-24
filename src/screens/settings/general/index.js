import React, { useState } from 'react'
import { Formik } from 'formik'
import { InputField } from '../../../components/Input'
import { Container as BootstrapContainer } from 'styled-bootstrap-grid'

import { api } from '@/services/api'
import { useAuth } from '@/hooks/useAuth'
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

export default function GeneralSettings() {
  const [loading, setLoading] = useState(false)

  const { user, refetch } = useAuth()
  const { showSuccessMessage, showErrorMessage } = useSnack()

  return (
    <BootstrapContainer>
      <FormContainer>
        <Formik
          initialValues={{ username: user?.username, teamname: user?.teamname }}
          onSubmit={async values => {
            try {
              setLoading(true)
              const { username, teamname } = values

              await api.put('/auth/profile', {
                username,
                teamname
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
              {/* <h2>Profile Picture</h2>
              <Wrapper style={{flexDirection: 'row'}}>
                <img
                  src="https://resize.metafy.gg/?width=80&height=80&fit=crop&quality=100&sharpen=1&format=webp&image=%2Favatars%2F9.jpg"
                  alt="Picture of the player"
                />
                <ReplaceImageButton>Replace image</ReplaceImageButton>
                <DeleteButton>
                  <ArrowRightIcon />
                  Replace image
                </DeleteButton>
              </Wrapper> */}

              <h2>Personal Info</h2>
              <Wrapper>
                <InputField
                  label="Email"
                  type="email"
                  name="email"
                  value={user?.email}
                  disabled
                />
                <InputRowWrapper>
                  <InputField
                    label="Username"
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange('username')}
                    value={values.username}
                  />
                  <InputField
                    label="Teamname"
                    name="teamname"
                    placeholder="Teamname"
                    onChange={handleChange('teamname')}
                    value={values.teamname}
                  />
                </InputRowWrapper>
              </Wrapper>

              {/* <h2>Language and Region</h2>
              <Wrapper>
                <div style={{marginBottom: '-20px', width: '100%'}}>
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
                </div>
              </Wrapper> */}

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

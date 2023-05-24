import styled from 'styled-components'

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`

export const Input = styled.input`
  background: #282834;
  color: white;
  padding: 12px;
  border-radius: 12px;
  width: 100%;
  height: 55px;

  &::hover {
    background: #323241;
  }

  &::placeholder {
    color: #88869f;
  }

  :focus {
    outline: none;
    border: 0.5px solid #88869f;
  }
`

export const Label = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: 12px;
`

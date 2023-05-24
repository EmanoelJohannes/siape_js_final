import Modal from 'styled-react-modal'
import styled from 'styled-components'
import media from 'styled-media-query'

import { Close } from '../../../../../assets/icons'

export const StyledModal = Modal.styled`
  height: auto;
  width: 400px;
  transition : all 0.3s ease-in-out;
  background: ${({ theme }) => theme.colors.darkBackground2};
  border-radius: 10px;
  position: relative;

  ${media.lessThan('medium')`
    height: 100vh;
    width: 100vw;
  `}

`

export const CloseIcon = styled(Close)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  fill: white;
  position: absolute;
  top: 10px;
  right: 10px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: 100%;
  width: 100%;
  padding: 20px 30px;

  > h2 {
    margin-bottom: 24px;
  }
`

export const FormContainer = styled.div`
width: 100%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  
`
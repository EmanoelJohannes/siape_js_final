import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { ArrowRight } from '../../../assets/icons'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
`

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBackground};
  border-radius: 10px;
  z-index: 2;

  display: grid;
  grid-template-columns: 1fr 1fr;

  width: 940px;

  ${media.lessThan('medium')`
    display: flex;
    width: 100%;
    height: 100%;
  `}
`

export const FormWrapper = styled.div`
  padding: 40px;

  flex-direction: column;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;

  ${media.lessThan('medium')`
    padding: 20px;
  `}
`

export const AccountText = styled.span`
  display: flex;
  flex-direction: row;
  margin-bottom: 32px;

  color: ${({ theme }) => theme.colors.darkText};

  > a {
    color: ${({ theme }) => theme.colors.yellowLight};
    margin-left: 5px;

    &:hover {
      opacity: 0.8;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const FormContainer = styled.div``

export const StattrakIcon = styled.div`
  ${media.greaterThan('medium')`
    display: none;
  `}
`

export const BottomForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-top: 10px;

  > a {
    color: ${({ theme }) => theme.colors.yellowLight};

    &:hover {
      opacity: 0.8;
    }
  }
`

export const SubmitButton = styled.div`
  display: flex;
`

const iconCSS = css`
  flex-shrink: 0;

  width: 15px;
  height: 15px;
  color: black;
  margin-left: 10px;
`

export const ArrowRightIcon = styled(ArrowRight)`
  ${iconCSS}
`

export const MainImage = styled.div`
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url('/background_modal.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${media.lessThan('medium')`
    display: none;
  `}
`

export const DividerContainer = styled.div`
  margin: 32px 0;
`

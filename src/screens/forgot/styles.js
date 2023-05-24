import styled from 'styled-components'
import media from 'styled-media-query'

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
  flex-direction: column;
  margin-bottom: 32px;

  font-size: 24px;

  > p {
    color: ${({ theme }) => theme.colors.darkText};
    font-size: 14px;
    margin-top: 8px;
  }

  > a {
    color: ${({ theme }) => theme.colors.yellowLight};
    font-size: 14px;
    margin-bottom: 16px;
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
  width: 100%;
  align-items: center;
  margin-top: 10px;

  justify-content: flex-end;

  > a {
    color: ${({ theme }) => theme.colors.yellowLight};
    margin-left: 5px;

    &:hover {
      opacity: 0.8;
    }
  }
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

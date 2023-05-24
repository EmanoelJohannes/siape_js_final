import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { ArrowRight } from '../../../../assets/icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Wrapper = styled.div`
  padding: 24px;
  margin-bottom: 28px;
  background-color: ${({ theme }) => theme.colors.darkBackground};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    height: 80px;
    width: 80px;

    border-radius: 0.75rem;
    background-color: ${({ theme }) => theme.colors.blackBackground};

    margin-right: 16px;

  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  > h2 {
    margin-bottom: 1.5rem;

    ${media.lessThan('medium')`
      display: none;
    `}
  }
`

export const FormContainer = styled.div`
  margin-top: 30px;
`

export const BottomForm = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-end;
  margin-bottom: 40px;

  justify-content: flex-end;
`

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: black;
  padding: 12px 32px;
  background: ${({ theme }) => theme.colors.yellowLight};

  cursor: pointer;
  border-radius: 5px;

  &:hover {
    opacity: 0.8;
  }
`

export const ReplaceImageButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: black;
  padding: 12px;
  background: ${({ theme }) => theme.colors.yellowLight};
  margin-right: 16px;

  cursor: pointer;
  border-radius: 5px;

  &:hover {
    opacity: 0.8;
  }
`

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: white;
  padding: 12px;
  background: ${({ theme }) => theme.colors.outline};

  cursor: pointer;
  border-radius: 5px;

  &:hover {
    opacity: 0.8;
  }
`

const iconCSS = css`
  flex-shrink: 0;
  height: 19px;
  color: black;
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.darkText};
`

export const ArrowRightIcon = styled(ArrowRight)`
  ${iconCSS}
`


export const InputRowWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  width: 100%;
  margin-bottom: -20px;

  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
    gap: 0;
  `}
`

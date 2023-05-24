import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`

export const Title = styled.div`
  margin-bottom: 16px;

  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.005em;
  color: #ffffff;
`

export const Tabs = styled.div`
  display: flex;
`

export const Tab = styled.div`
  padding: 12px 20px;
  border: 1px solid #1e1e27;
  border-radius: 8px;
  margin-right: 12px;

  cursor: pointer;

  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.005em;
  color: #88869f;

  &:hover {
    background: #1e1e27;
  }

  ${({ active }) =>
    active &&
    css`
      background: #ffffff;
      color: #0E0E11;

      &:hover {
        background: #ffffff;
        color: #0E0E11;
      }
    `}
`

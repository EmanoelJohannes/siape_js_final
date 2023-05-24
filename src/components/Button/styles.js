import styled, { css } from 'styled-components'

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
  `};

  background: ${({ type = 'primary' }) =>
    type === 'primary' ? '#FFD789' : '#323241'};
  border-radius: 8px;
  padding: 0 24px;

  font-size: 14px;
  line-height: 15px;
  font-weight: 600;
  color: ${({ type = 'primary' }) =>
    type === 'primary' ? '#14141A' : '#FFFFFF'};

  text-align: center;
  white-space: nowrap;

  cursor: pointer;
  outline: 0;

  &:hover {
    background: ${({ type = 'primary' }) =>
      type === 'primary' ? '#FFD27B' : '#282834'};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`

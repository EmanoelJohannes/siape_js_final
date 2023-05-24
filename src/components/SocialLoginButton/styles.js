import styled from 'styled-components'

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${props => (props.size == 'small' ? '40px' : '88px')};
  height: ${props => (props.size == 'small' ? '40px' : '56px')};

  text-align: center;

  background-color: ${({ theme }) => theme.colors.darkBackgroundLighter};

  margin-right: 10px;
  border-radius: 10px;

  &:hover {
    background-color: ${props => props.hoverColor};
    cursor: pointer;
  }
`

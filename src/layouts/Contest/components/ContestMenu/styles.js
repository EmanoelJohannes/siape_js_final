import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`

export const Menu = styled.a`
  margin-right: 50px;
  border-bottom: ${props => (props.active ? '2px solid #FFD27B' : '')};
  color: ${props => (props.active ? '' : '#818098')};
  padding: 16px;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  cursor: pointer;

  &:hover {
    color: ${props => (props.active ? '' : '#B7B6D9')};
  }
`

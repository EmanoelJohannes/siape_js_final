import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
`

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
`

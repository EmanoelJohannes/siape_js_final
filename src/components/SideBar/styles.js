import styled from 'styled-components'

export const Container = styled.div`
  display: none;

  border-left: 1px solid ${({ theme }) => theme.colors.outline};
  background: ${({ theme }) => theme.colors.blackBackground};

  @media (min-width: 1000px) {
    width: 256px;
    display: flex;
    flex-direction: column;
  }
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 57px 24px 200px;
  margin-top: 3px;

  > div + div {
    margin-top: 15px;
  }
`

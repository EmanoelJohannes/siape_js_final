import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  margin-bottom: 12px;

  > h2 {
    color: ${({ theme }) => theme.colors.yellowLight};
    font-size: 16px;
    margin-top: 16px;
  }

  > span {
    text-align: center;
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.darkText};
    max-width: 380px;
  }
`

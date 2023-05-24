import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 16px;
  background: ${({ theme }) => theme.colors.blackBackground};
  border-radius: 12px;
  margin-bottom: 24px;

  > h2 {
    margin-bottom: 16px;
  }
`

export const LineupButton = styled.button`
  background: #FFD789;
  border-radius: 6px;
  padding: 10px 20px;
  margin-top: 12px;
  cursor: pointer;

  &:hover {
    background: #FFD27B;
  }

  font-size: 14px;
  line-height: 15px;
  font-weight: 600;
  color: #14141A;
  text-align: center;
  white-space: nowrap;
`

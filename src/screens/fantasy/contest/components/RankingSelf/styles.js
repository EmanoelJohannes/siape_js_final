import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Table = styled.div`
  background: ${({ theme }) => theme.colors.blackBackground};
  border-radius: 8px;
  margin: 12px 0;
`

export const TableContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;

  &:hover {
    background: #282834;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Position = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1e1e27;
  border-radius: 9px;
  padding: 16px;

  margin-right: 16px;
`

export const Avatar = styled(Image)`
  border-radius: 40px;
`

export const User = styled.div`
  margin-left: 16px;

  > p {
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
  }

  > span {
    font-weight: 400;
    font-size: 14px;
    color: #88869f;
  }
`

export const Score = styled.div`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #88869F;
`

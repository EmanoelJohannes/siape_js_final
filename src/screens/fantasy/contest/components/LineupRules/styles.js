import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 24px;

  > h2 {
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 0.005em;
    color: #FFFFFF;
    margin-bottom: 20px;
  }
`

export const Content = styled.div`
  border: 1px solid #1e1e27;
  border-radius: 8px;
  padding: 24px;

  > span {
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #88869F;
    text-transform: uppercase;
  }
`

export const Rules = styled.div`
  margin-top: 12px;

  > ul {
    margin-left: 16px;
    margin: 0;
    list-style: none;

    > li {
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #88869F;

      margin-top: 12px;

      > span {
        color: #FFFFFF;
      }
    }
  }
`

export const Salary = styled.div`
  margin-bottom: 30px;

  > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #88869F;
    text-transform: uppercase;
  }

  > strong {
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.005em;
    color: #FFFFFF;

    margin-top: 8px;
  }


`

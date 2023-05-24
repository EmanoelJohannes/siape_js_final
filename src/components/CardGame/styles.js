import styled, { css } from 'styled-components'

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
  cursor: pointer;

  width: 200px;

  > span {
    font-size: 16px;
    font-weight: bold;
    margin-top: 16px;
  }

  > p {
    font-size: 12px;
    margin-top: 12px;
    color: #88869f;
  }

  &:hover {
    img {
      transform: scale(1.04);
      transition: transform 0.1s ease;
      border-radius: 10px;
    }
  }
`

export const Header = styled.div`
  img {
    border-radius: 10px;

    ${({ comming }) =>
      comming &&
      css`
        filter: grayscale(100%);
      `};
  }

  > span {
    border-radius: 10px;
  }
`

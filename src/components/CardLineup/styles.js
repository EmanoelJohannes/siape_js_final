import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  background: ${({ theme }) => theme.colors.blackBackground};
  border-radius: 4px;

  > span {
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
  }
`

export const ImageContainer = styled.div`
  height: 177px;
  width: 100%;
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;

  > span {
    width: 100%;
    transition: 0.2s all ease-in-out;
    height: 177px;
    margin-right: 20px;

    ${media.lessThan('medium')`
      height: 250px;
    `}

    &:hover {
      transform: scale(1.08);
    }
  }
`

export const Date = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.darkText};
  margin-top: 20px;
  margin-bottom: 10px;
`

export const Title = styled.h2`
  font-size: 20px;
  font-weight: normal;
  cursor: pointer;
`

export const TagList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 10px;
`

export const Tag = styled.button`
  color: ${({ theme }) => theme.colors.darkText};
  background: ${({ theme }) => theme.colors.darkBackgroundLighter};
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 10px;
  margin-top: 12px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    transition: 0.2s;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 12px;

  > div {
    > p {
      font-size: 12px;
      color: ${({ theme }) => theme.colors.darkText};
      margin-bottom: 5px;
    }

    > span {
      color: #ddd;
      font-size: 12px;
    }
  }
`

export const TournamentInfo = styled.div`
  padding: 0 16px 16px 16px;
`

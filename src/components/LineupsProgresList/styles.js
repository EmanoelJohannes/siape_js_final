import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  margin-top: 40px;
`

export const Lineup = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #14141a;
  border-radius: 8px;
  padding: 10px 16px;

  margin-bottom: 16px;

  &:hover {
    background: #1e1e27;
  }

  ${media.lessThan('medium')`
    flex-direction: column;
    align-items: flex-start;
  `}
`

export const Information = styled.div`
  > p {
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
  }
`

export const Tags = styled.div`
  display: flex;

  > span {
    font-weight: 400;
    font-size: 14px;
    color: #88869f;
  }
`

export const Players = styled.div`
  display: flex;
  flex-direction: row;

  ${media.lessThan('medium')`
    margin-top: 12px;
  `}
`

export const Player = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: ${props => (props.imageUrl ? props.imageUrl : '#FFD27B')};
  background-color: black;
  object-fit: contain;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin-left: -10px;
  border: 2px solid black;
  padding: 4px;

  font-weight: 400;
  font-size: 14px;
  color: white;
`

export const Dot = styled.div`
  width: 5px;
  height: 5px;
  background: gray;
  border-radius: 50%;
  margin-right: 12px;
  margin-left: 12px;
  display: flex;
  align-self: center;
`

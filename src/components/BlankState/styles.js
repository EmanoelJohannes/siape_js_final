import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 76px 12px;
  background: linear-gradient(180deg, #1E1E27 0%, rgba(20, 20, 26, 0) 100%);
  border-radius: 16px;

  > a {
    margin-top: 12px;
  }
`

export const Title = styled.h2`
  font-weight: 600;
  font-size: 20px;
  color: #FFFFFF;
  text-align: center;
`

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #88869F;
  text-align: center;

  margin-top: 12px;
`

import styled from 'styled-components'

import { Trophy } from '../../../../../../../assets/icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid #1e1e27;
  border-radius: 8px;
  padding: 16px;
`

export const Content = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 12px;
`

export const Rank = styled.div`
  margin-left: 12px;

  > h2 {
    font-weight: 400;
    font-size: 14px;
    color: #88869f;
  }

  > span {
    font-weight: 600;
    font-size: 32px;
    letter-spacing: 0.04em;
    color: #ffffff;
  }
`

export const Icon = styled.div`
  background: #1e1e27;
  border-radius: 4px;
  padding: 16px;
`

export const TrophyFillIcon = styled(Trophy)`
  flex-shrink: 0;
  fill: #ffffff;
  height: 30px;
`

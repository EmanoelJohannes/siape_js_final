import styled from 'styled-components'
import { Trophy } from '../../../../../../assets/icons'

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

export const GameAchievementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`

export const AchievementContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Achievement = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;

  > img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 8px;

    > p {
      font-weight: bold;
      margin-bottom: 4px;
    }

    > span {
      font-size: 14px !important;
      color: ${({ theme }) => theme.colors.darkText};
    }
  }
`

export const TrophyFillIcon = styled(Trophy)`
  flex-shrink: 0;
  fill: #FFD27B;
  height: 30px;
`

import styled, { css } from 'styled-components'
import { Settings, Security } from '../../../../../assets/icons'
import media from 'styled-media-query'

export const SettingsMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  > span {
    color: ${({ theme }) => theme.colors.darkText};
    font-size: 14px !important;
    font-weight: bold;
    margin-bottom: 12px;
  }

  ${media.lessThan('medium')`
    display: ${props => (props.hasSettingsUrl ? 'none' : 'inherit' )};
  `}
`

export const SettingsMenuOption = styled.a`
  background: ${props => (props.active ? '#1E1E27' : '' )} ;
  cursor: pointer;
  padding: 16px;
  border-radius: 0.25rem ;
  margin-bottom: 4px;

  &:hover {
    background: ${({ theme }) => theme.colors.darkBackground};
  }

  display: flex;
  flex-direction: row;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    > p {
      font-weight: bold;
      color: white;
      font-size: 18px !important;

    }

    > span {
      color: ${({ theme }) => theme.colors.darkText};
      font-size: 14px !important;
      margin-top: 4px;
    }
  }
`

const iconCSS = css`
  flex-shrink: 0;

  height: 24px;
  color: #88869f;
  margin-right: 8px
`

export const SettingsIcon = styled(Settings)`
  ${iconCSS}
`

export const SecurityIcon = styled(Security)`
  ${iconCSS}
`

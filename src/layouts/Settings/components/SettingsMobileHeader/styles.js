import styled, { css } from 'styled-components'
import { KeyboardArrowLeft } from '../../../../../assets/icons'
import media from 'styled-media-query'

export const BackButton = styled.div`
  height: 40px;
  width: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-right: 8px;
  background: ${({ theme }) => theme.colors.darkBackground};
`

export const SettingsMobileHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  display: ${props => (props.isAccountPage ? 'none' : 'inherit' )};

  ${media.greaterThan('medium')`
    display: none;
  `}

  > span {
    font-size: 24px;
  }
`

const iconCSS = css`
  flex-shrink: 0;

  height: 24px;
  color: #88869f;
`

export const SettingsIcon = styled(KeyboardArrowLeft)`
  ${iconCSS}
`

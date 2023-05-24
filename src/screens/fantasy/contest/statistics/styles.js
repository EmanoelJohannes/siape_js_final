import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 28px;
  padding-top: 48px;

  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
  `}
`

export const SideBarContainer = styled.div`
  position: sticky;
  height: fit-content;
  top: 80px;
`

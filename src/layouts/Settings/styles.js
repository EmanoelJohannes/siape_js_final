import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
`

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
`

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  flex: 1;

  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
    padding-right: 16px;
    padding-left: 16px;
  `}
`

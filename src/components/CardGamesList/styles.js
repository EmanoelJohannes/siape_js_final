import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  width: 100%;

  ${media.lessThan('medium')`
    width: 100vw;
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;



  ${media.lessThan('medium')`
    overflow-y: auto;
  `}

  .swiper-slide  {
    width: 200px;
  }
`

export const Title = styled.h2`
  margin-bottom: 20px;
  margin-top: 40px;
`

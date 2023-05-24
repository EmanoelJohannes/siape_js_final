import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  overflow: hidden;
`

export const SlideBackground = styled.div`
  background: url('/background_games.png') repeat-x;
  height: 500px;
  width: 5076px;
  position: absolute;
  top: 0;
  left: 0;
  background-size: contain;
  animation: slide 60s linear infinite;

  -webkit-mask-image: -webkit-gradient(
    linear,
    center bottom,
    center top,
    color-stop(0, rgba(0, 0, 0, 0)),
    color-stop(1, rgba(0, 0, 0, 1))
  );

  @keyframes slide {
    0% {
      transform: translate3d(-500px, 0, 0);
    }
    100% {
      transform: translate3d(-1292px, 0, 0);
    }
  }

  ${media.lessThan('medium')`
    display: none;
  `}
`

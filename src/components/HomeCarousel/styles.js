import styled, { css } from 'styled-components'
import { PeopleTeam, GameController, Sword } from '../../../assets/icons'
import media from 'styled-media-query'

export const CarouselItem = styled.div`
  height: 280px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
`


export const Container = styled.div`
  width: 100%;
  z-index: 0;
  
  & .carousel .control-dots {
    bottom: 10px;
    left: 0;
    right: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }

  &.carousel.carousel-slider {
    overflow: inherit;
  }

  &.carousel .control-arrow, .carousel.carousel-slider .control-arrow{
      opacity: 1;
      transition: none;
      height: 40px;
      margin-top: 100px;
      border-radius: 4px;
  }

  &.carousel .control-next.control-arrow:before {
      content: '';
      border-width: 0 8px 8px 0;
      display: inline-block;
      padding: 14px;
  }

  &.carousel .control-prev.control-arrow:before {
      content: '';
      border-width: 0 8px 8px 0;
      display: inline-block;
      padding: 14px;
  }
`

export const BackgroundImageContainer = styled.div`
  background-image: url(${props => (props.image)});
  width: 100%;
  height: 225px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`

export const CarouselItemContent = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 12px;

  > p {
    font-size: 24px;
    color: white;
    font-weight: bold;
    margin-bottom: 8px;
    background: ${props => (props.titleBackground)};
    padding: 4px;
  }

  > span {
    font-size: 14px;
    color: white;
  }
`
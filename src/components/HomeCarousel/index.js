import React from 'react'
import { Carousel } from 'react-responsive-carousel'

import {
  Container,
  CarouselItem,
  BackgroundImageContainer,
  CarouselItemContent
} from './styles'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function HomeCarousel() {
  return (
    <Container>
      <Carousel infiniteLoop showThumbs={false} showStatus={false}>
        <CarouselItem>
          <BackgroundImageContainer image="/carrousel/worlds.png" />
          <CarouselItemContent titleBackground="#1749DF">
            <p>Worlds 2022 ONE & ONLY</p>
            <span>Play Worlds 2022 Fantasy Game</span>
          </CarouselItemContent>
        </CarouselItem>

        <CarouselItem>
          <BackgroundImageContainer image="/carrousel/iem.webp" />
          <CarouselItemContent titleBackground="#1749DF">
            <p>IEM Major Rio</p>
            <span>Play IEM Rio Fantasy Game</span>
          </CarouselItemContent>
        </CarouselItem>
      </Carousel>
    </Container>
  )
}

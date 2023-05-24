import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useAPI } from '@/hooks/useAPI'

import { CardGame } from '../CardGame'

import { Container, Content, Title } from './styles'
import CardGameShimmer from '@/components/Shimmer/CardGameShimmer'

import { Pagination } from 'swiper'

export default function CardGamesList() {
  const { data } = useAPI({
    url: '/contests/list'
  })

  return (
    <Container>
      <Title>Browse games</Title>
      {data ? (
        <Content>
          <Swiper
            spaceBetween={20}
            slidesPerView={'auto'}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <CardGame
                name="League of Legends"
                src="/games/lol_card.png"
                to="/fantasy/lol"
                game="lol"
                tournaments={data}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardGame
                name="Counter-Strike: Global Ofensive"
                src="/games/csgo_card.png"
                to="/fantasy/csgo"
                game="csgo"
                tournaments={data}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardGame
                name="Valorant"
                src="/games/valorant_card.png"
                to="/fantasy/valorant"
                game="valorant"
                tournaments={data}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardGame
                name="Rainbow Six Siege"
                src="/games/r6_card.png"
                to="/fantasy/r6siege"
                game="r6siege"
                tournaments={data}
                comming
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardGame
                name="Dota2"
                src="/games/dota2_card.png"
                to="/fantasy/dota2"
                game="dota2"
                tournaments={data}
                comming
              />
            </SwiperSlide>
          </Swiper>
        </Content>
      ) : (
        <Content>
          <CardGameShimmer />
          <CardGameShimmer />
          <CardGameShimmer />
          <CardGameShimmer />
          <CardGameShimmer />
        </Content>
      )}
    </Container>
  )
}

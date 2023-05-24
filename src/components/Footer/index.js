import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container as BootstrapContainer } from 'styled-bootstrap-grid'

import { DiscordAlt } from '../../../assets/icons'

import {
  Container,
  Dot,
  Wrapper,
  WrapperSectionMain,
  WrapperSectionMobile,
  WrapperSection,
  DiscordButton,
  FooterBottomSide,
  FooterMenu,
  FooterLinks,
  MobileStoresWrapper,
  Corporate,
  StoreButton
} from './styles'

import { FooterSocials } from '../FooterSocials'

export default function Footer() {
  return (
    <Container>
      <BootstrapContainer>
        <Wrapper>
          <WrapperSectionMain>
            <Image
              width={150}
              height={60}
              src="/icon_branco_st_1.svg"
              alt="Stattrak Logo"
            />
            <span>Your Esports HUB</span>

            <Link href="https://discord.gg/Rb526xFwGq" passHref>
              <DiscordButton>
                <DiscordAlt />
                Join Statttrak Discord
              </DiscordButton>
            </Link>

            <FooterSocials />
          </WrapperSectionMain>

          <WrapperSection>
            <strong>Product</strong>
            <Link href="/fantasy">Fantasy Game</Link>
          </WrapperSection>

          <WrapperSection>
            <strong>Company</strong>
            <Link href="mailto:contact@stattrak.gg">Contact</Link>
            <Link href="mailto:contact@stattrak.gg">Support</Link>
            <Link href="/blog">Blog</Link>
          </WrapperSection>

          <WrapperSection>
            <strong>Popular Games</strong>
            <Link href="/fantasy/lol">League of Legends</Link>
            <Link href="/fantasy/csgo">Counter-Strike: Global Ofensive</Link>
            <Link href="/fantasy/valorant">Valorant</Link>
          </WrapperSection>

          <WrapperSectionMobile>
            <strong>Mobile app</strong>
            <MobileStoresWrapper>
              <Link
                href="https://apps.apple.com/us/app/stattrak-fantasy-esports/id1607153495"
                target="_blank"
                passHref
              >
                <StoreButton>
                  <Image
                    width={132}
                    height={40}
                    src="/app_store.svg"
                    alt="App Store"
                  />
                </StoreButton>
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=gg.stattrak.nexus"
                target="_blank"
                passHref
              >
                <StoreButton>
                  <Image
                    width={132}
                    height={40}
                    src="/play_store.svg"
                    alt="Play Store"
                  />
                </StoreButton>
              </Link>
            </MobileStoresWrapper>
          </WrapperSectionMobile>
        </Wrapper>

        <FooterBottomSide>
          <span>
            Stattrak is not affiliated with any games or game companies. Use of
            any third-party trademarks and content is for reference only. All
            trademarks and copyrights are property of their respective owners.
          </span>

          <FooterMenu>
            <FooterLinks>
              <Link href="https://stattrak.gg/privacy" target="_blank">
                Privacy
              </Link>
              <Dot />
              <Link href="https://stattrak.gg/terms" target="_blank">
                Terms
              </Link>
              <Dot />
              <Link href="mailto:contact@stattrak.gg" target="_blank">
                Contact
              </Link>
            </FooterLinks>
            <Corporate>© 2022 Stattrak, Inc.</Corporate>
          </FooterMenu>
        </FooterBottomSide>
      </BootstrapContainer>
    </Container>
  )
}

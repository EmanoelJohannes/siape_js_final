import React from 'react'
import Link from 'next/link'
import { Container as BootstrapContainer } from 'styled-bootstrap-grid'

import {
  Container,
  Dot,
  FooterBottomSide,
  FooterMenu,
  FooterLinks,
  Corporate,
} from './styles'

export default function Footer() {
  return (
    <Container>
      <BootstrapContainer>
        <FooterBottomSide>
          <span>
            Aplicativo criado pelos alunos Emanoel e Gabriel para seus projetos 
            de conclusão do curso de bacharel em Ciência da Computação, Universidade de Brasília.
          </span>

          <FooterMenu>
            <FooterLinks>
              <Link href="https://stattrak.gg/privacy" target="_blank">
                Privacidade
              </Link>
              <Dot />
              <Link href="https://stattrak.gg/terms" target="_blank">
                Termos
              </Link>
              <Dot />
              <Link href="mailto:contact@stattrak.gg" target="_blank">
                Contato
              </Link>
            </FooterLinks>
            <Corporate>© 2023 SIAPE, UNB</Corporate>
          </FooterMenu>
        </FooterBottomSide>
      </BootstrapContainer>
    </Container>
  )
}

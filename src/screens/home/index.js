import React from 'react'

import { Container } from './styles'
import Accordion from '@/components/AccordionItem'
import { TopHomeComponent } from '@/components/TopHomePage';
import { InfoHomeComponent } from '@/components/InfoHomeComponent';
import { TextInfoHomeComponent } from '@/components/TextInfoHomeComponent';
import { Box } from '@mui/material';
import Footer from '@/components/Footer';

export default function Home() {
  const faq = [
    {
      title: 'O que é o SIAPE?',
      content:
        'O SIAPE é um sistema que reúne dados de projetos de extensão universitária. Ele foi desenvolvida para uso exclusivo dos funcionários do Decanato de Extensão, com o objetivo de auxiliar atividades administrativas que normalmente seriam muito demoradas.'
    },
    {
      title: 'Quais são as funcionalidades dessa aplicação?',
      content:
        'O SIAPE permite reunir e acessar informações sobre os projetos de extensão universitária de forma organizada. Os funcionários do Decanato de Extensão podem cadastrar novos projetos, visualizar detalhes de projetos existentes, gerenciar participantes, acompanhar o progresso dos projetos, entre outras atividades relacionadas à administração dos projetos de extensão.'
    },
    {
      title: 'Quem pode utilizar?',
      content:
        'O uso é exclusivo para os funcionários do Decanato de Extensão. Eles possuem as credenciais necessárias para acessar a aplicação e utilizar todas as suas funcionalidades.'
    },
    {
      title: 'Essa aplicação é paga?',
      content:
        'Não, a aplicação é gratuita para todos os funcionários do Decanato de Extensão. Não há nenhum custo associado ao uso dessa aplicação.'
    },
    {
      title: 'Como posso começar a utilizar essa aplicação?',
      content:
        'Para começar a utilizar a aplicação, basta acessar a plataforma usando as credenciais fornecidas pelo Decanato de Extensão. Uma vez logado, você terá acesso a todas as funcionalidades e poderá começar a visualizar e reunir dados dos projetos de extensão universitária.'
    },
    {
      title: 'Essa aplicação é segura?',
      content:
        'Sim, a segurança é uma prioridade nesta aplicação. Todas as informações dos projetos de extensão são armazenadas de forma segura e só podem ser acessadas pelos funcionários autorizados. Além disso, são implementadas medidas de segurança para proteger os dados contra acessos não autorizados.'
    }
  ];

  return (
    <>
      <Container>
        <TopHomeComponent />
        <Box maxWidth="1380px">
          <TextInfoHomeComponent />
          <InfoHomeComponent />
          <Accordion title="Perguntas frequentes" data={faq} />
        </Box>
      </Container>
      <Footer />
    </>
  )
}
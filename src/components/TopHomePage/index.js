import React from 'react';
import Link from 'next/link'

import {
  Box,
  BoxButtonsTop,
  ButtonLogar,
  ContentBox,
  SIAPELogo
} from './styles';
import Button from '../Button';

export const TopHomeComponent = () => {
  return (
    <Box>
      <ContentBox>
        <SIAPELogo>
          <h1 style={{ fontSize: '20px', marginLeft: '5px' }}>SIAPE</h1>
          <p style={{ fontSize: '14px', marginLeft: '5px' }}>
            Sistema de apoio a projetos de extensão
          </p>
        </SIAPELogo>
        <BoxButtonsTop>
          <Link href="/auth/signin">
            <Button type="secondary">Entrar</Button>
          </Link>
        </BoxButtonsTop>
      </ContentBox>
    </Box>
  );
};

import React from 'react';
import { Box, ContentBoxInfo, TextBoxInfo } from './styles';
import Image from 'next/image';
import dashboard from '../../../public/dashboard.jpeg';

export const InfoHomeComponent = () => {
  return (
    <Box>
      <ContentBoxInfo>
        <Image
          src={dashboard}
          width='1200px'
          height='650px'
          alt="Home page graphics"
        ></Image>
        <TextBoxInfo>
          <h1>Dados avançados sobre extensão na Universidade de Brasília</h1>
        </TextBoxInfo>
      </ContentBoxInfo>
    </Box>
  );
};

import React from 'react';
import {
  Box,
  ContentBox,
  InfoButtonCadastrar,
  InfoLeftContent,
  InforRightContent
} from './styles';

export const TextInfoHomeComponent = () => {
  return (
    <Box>
      <ContentBox>
        <InfoLeftContent>
          <p>Análise fácil de dados</p>
          <h1>
            Sistema voltado para profissionais da área de extensão da
            Universidade de Brasília
          </h1>
        </InfoLeftContent>
        <InforRightContent>
          <h1>
            Experimente a possiblidade de obter dados de uma maneira mais fácil
            e intuitiva
          </h1>
          <div>
            <InfoButtonCadastrar>Conhecer</InfoButtonCadastrar>
          </div>
        </InforRightContent>
      </ContentBox>
    </Box>
  );
};

import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { Container } from '@/components/Container';
import Selectors from '@/components/Selectors';
import ChartComponent from '@/components/ChartComponent';
import { Metrics } from '@/components/Metrics';

export default function Externos({ data }) {
  const [typeChart, setTypeChart] = useState('ColumnChart');
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedDepartament, setSelectedDepartament] = useState([]);
  const [selectedManagers, setSelectedManagers] = useState(0);
  const [naoRepetidos, setNaoRepetidos] = useState(false);
  const [filtredDepartaments, setFiltredDepartaments] = useState([]);
  const [qtdPeopleByYear, setQtdPeopleByYear] = useState([]);
  const [contextData, setContextData] = useState(data);

  return (
    <Container>
      <h1>Indicador - Externos / Departamentos</h1>

      <Grid spacing={2} container my="24px">
        <Grid item xs={4}>
          <Box
            sx={{
              backgroundColor: '#FFF',
              height: '400px',
              padding: '12px',
              borderRadius: '8px'
            }}
          >
            <Selectors
              data={data}
              type="externos"
              years={data.years}
              typeChart={typeChart}
              setTypeChart={setTypeChart}
              selectedYear={selectedYear}
              filtredDepartaments={filtredDepartaments}
              setFiltredDepartaments={setFiltredDepartaments}
              setSelectedDepartament={setSelectedDepartament}
              setSelectedManagers={setSelectedManagers}
              setSelectedYear={setSelectedYear}
              naoRepetidos={naoRepetidos}
              setNaoRepetidos={setNaoRepetidos}
              contextData={contextData}
              setContextData={setContextData}
              setQtdPeopleByYear={setQtdPeopleByYear}
            />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box
            sx={{
              backgroundColor: '#FFF',
              height: '400px',
              padding: '12px',
              borderRadius: '8px'
            }}
          >
            <ChartComponent
              title="Gráfico da quantidade de externos por departamento"
              hAxis="Departamento"
              vAxis="Qtd. externos"
              chartType={typeChart}
              contextData={contextData}
              data={
                selectedDepartament.length != 0
                  ? selectedDepartament
                  : contextData.peoplesFromDepartaments
              }
            />
          </Box>
        </Grid>

        <Metrics
          title="Quantidade total de participantes externos no ano"
          value={contextData.totalPeoples}
          color={'#4f93bb'}
        />

        <Metrics
          title="Quantidade de departamentos que apoiou cursos externos"
          value={contextData.peoplesFromDepartaments.length}
          color={'rgb(96 187 79)'}
        />

        <Metrics
          title="Total de externos selecionados"
          value={selectedManagers}
          color={'rgb(79 187 182)'}
        />

        <Grid item xs={8}>
          <Box
            sx={{
              backgroundColor: '#FFF',
              height: '400px',
              padding: '12px',
              borderRadius: '8px'
            }}
          >
            <ChartComponent
              title="Gráfico da quantidade de externos atendidos por departamento ao longo dos anos"
              hAxis="Ano"
              vAxis="Qtd. externos"
              chartType="LineChart"
              data={
                qtdPeopleByYear.length !== 0
                  ? qtdPeopleByYear
                  : contextData.yearsPeople
              }
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

import React, { useState } from 'react';
import { Box, Button, Grid } from '@mui/material';
import { Container } from '@/components/Container';
import Selectors from '@/components/Selectors';
import ChartComponent from '@/components/ChartComponent';
import { Metrics } from '@/components/Metrics';
import PDFGenerator from '@/components/PDFGenerator';

export default function Discentes({ data }) {
  const [typeChart, setTypeChart] = useState('ColumnChart');
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedDepartament, setSelectedDepartament] = useState([]);
  const [selectedManagers, setSelectedManagers] = useState(0);
  const [naoRepetidos, setNaoRepetidos] = useState(false);
  const [filtredDepartaments, setFiltredDepartaments] = useState([]);
  const [qtdPeopleByYear, setQtdPeopleByYear] = useState([]);
  const [contextData, setContextData] = useState(data);

  const [showPdfModal, setShowPdfModal] = useState(false)

  const handleOpenModal = () => {
    setShowPdfModal(true)
  }

  const handleCloseModal = () => {
    setShowPdfModal(false)
  }

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <h1>Indicador - Discentes / Departamentos</h1>
        <Button variant="contained" onClick={handleOpenModal}>
          Gerar PDF
        </Button>
        {showPdfModal && (
          <PDFGenerator
            peoplesFromDepartaments={
              selectedDepartament.length != 0
                ? selectedDepartament
                : contextData.peoplesFromDepartaments
            }
            selectedManagers={selectedManagers}
            contextData={contextData}
            onClose={handleCloseModal}
            type="discentes"
          />
        )}
      </Box>

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
              type="discentes"
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
              title="Gráfico da quantidade de discentes por departamento"
              hAxis="Departamento"
              vAxis="Qtd. discentes"
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
          title="Quantidade total de discentes no ano"
          value={contextData.totalPeoples}
          color={'#4f93bb'}
        />

        <Metrics
          title="Quantidade de departamentos total com discentes"
          value={contextData.peoplesFromDepartaments.length}
          color={'rgb(96 187 79)'}
        />

        <Metrics
          title="Total de discentes selecionados"
          value={selectedManagers}
          color={'rgb(79 187 182)'}
        />

        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: '#FFF',
              height: '400px',
              padding: '12px',
              borderRadius: '8px'
            }}
          >
            <ChartComponent
              title="Gráfico da quantidade de discentes por departamento ao longo dos anos"
              hAxis="Ano"
              vAxis="Qtd. docentes"
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

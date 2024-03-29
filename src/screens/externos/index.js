import React, { useState } from 'react'
import { Box, Button, Grid } from '@mui/material'
import { Container } from '@/components/Container'
import Selectors from '@/components/Selectors'
import ChartComponent from '@/components/ChartComponent'
import { Metrics } from '@/components/Metrics'
import PDFGenerator from '@/components/PDFGenerator'
import ExcelGeneratorButton from '@/components/ExcelGenerator'

export default function Externos({ data }) {
  const [typeChart, setTypeChart] = useState('ColumnChart')
  const [selectedYear, setSelectedYear] = useState(0)
  const [selectedDepartament, setSelectedDepartament] = useState([])
  const [selectedManagers, setSelectedManagers] = useState(0)
  const [naoRepetidos, setNaoRepetidos] = useState(false)
  const [filtredDepartaments, setFiltredDepartaments] = useState([])
  const [qtdPeopleByYear, setQtdPeopleByYear] = useState([])
  const [contextData, setContextData] = useState(data)

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
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'start', md: 'center' }
        }}
      >
        <h1>Indicador - Externos / Departamentos</h1>
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'start', md: 'end' },
            width: '100%',
            mt: { xs: '16px', md: '0' }
          }}
        >
          <Button
            variant="contained"
            onClick={handleOpenModal}
            sx={{ marginRight: '10px' }}
          >
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
              type="externos"
            />
          )}

          <ExcelGeneratorButton
            peoplesFromDepartaments={
              selectedDepartament.length != 0
                ? selectedDepartament
                : contextData.peoplesFromDepartaments
            }
            selectedManagers={selectedManagers}
            contextData={contextData}
            type={'externos'}
          />
        </Box>
      </Box>

      <Grid container spacing={2} sx={{ my: '24px' }}>
        <Grid item xs={12} sm={6} md={4}>
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
        <Grid item xs={12} sm={6} md={8}>
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

        <Grid item xs={12} sm={6} md={4}>
          <Metrics
            title="Quantidade total de participantes externos no ano"
            value={contextData.totalPeoples}
            color={'#4f93bb'}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Metrics
            title="Quantidade de departamentos que apoiou cursos externos"
            value={contextData.peoplesFromDepartaments.length}
            color={'rgb(96 187 79)'}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Metrics
            title="Total de externos selecionados"
            value={selectedManagers}
            color={'rgb(79 187 182)'}
          />
        </Grid>

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
  )
}

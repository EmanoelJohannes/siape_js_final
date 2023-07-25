import React, { useState } from 'react'
import { Box, Button, Grid } from '@mui/material'
import { Container } from '@/components/Container'
import Selectors from '@/components/Selectors'
import ChartComponent from '@/components/ChartComponent'
import { Metrics } from '@/components/Metrics'
import PDFGenerator from '@/components/PDFGenerator'
import ExcelGenerator from '@/components/ExcelGenerator'
import ExcelGeneratorButton from '@/components/ExcelGenerator'

export default function Docentes({ data }) {
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
        <h1>Indicador - Docentes / Departamentos</h1>
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'start', md: 'end' },
            width: '100%',
            mt: { xs: '16px', md: '0' }
          }}
        >
          <Button variant="contained" onClick={handleOpenModal} sx={{marginRight: '10px'}}>
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
              type="docentes"
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
            type={'docentes'}
          />
        </Box>
      </Box>

      <Grid spacing={2} container my="24px">
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
              type="docentes"
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
              title="Gráfico da quantidade de docentes por departamento"
              hAxis="Departamento"
              vAxis="Qtd. docentes"
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
            title="Quantidade total de docentes no ano"
            value={contextData.totalPeoples}
            color={'#4f93bb'}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Metrics
            title="Quantidade de departamentos total com docentes"
            value={contextData.peoplesFromDepartaments.length}
            color={'rgb(96 187 79)'}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Metrics
            title="Total de docentes selecionados"
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
              title="Gráfico da quantidade de docentes por departamento ao longo dos anos"
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
  )
}

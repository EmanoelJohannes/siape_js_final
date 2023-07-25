/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react'
import { Container } from './styles'
import { Box, Button, Grid, Typography } from '@mui/material'
import { Metrics } from '@/components/Metrics'
import ChartComponent from '@/components/ChartComponent'
import { SimpleMetric } from '@/components/SimpleMetric'
import DepartamentsSelectors from '@/components/DepartamentsSelectors'

import PDFGenerator from './pdfGenerator'
import ExcelGeneratorDepartamentosButton from './excelGenerator'

export default function Departamentos({ data }) {
  const [metricPublic, setMetricPublic] = useState([])
  const [financingMetric, setFinanciingMetric] = useState(null)
  const [showPdfModal, setShowPdfModal] = useState(false)

  const [selectedYear, setSelectedYear] = useState(0)
  const [selectedDepartament, setSelectedDepartament] = useState([])
  const [contextData, setContextData] = useState(data)

  useEffect(() => {
    async function fetchData() {
      let dataMetrics = []

      dataMetrics.push(['Externo', contextData.estimadoExterno])
      dataMetrics.push(['Interno', contextData.estimadoInterno])
      dataMetrics.push(['Atingido', contextData.atingido])

      dataMetrics.unshift(['Público', 'Quantidade'])

      setFinanciingMetric(contextData.tiposFinanciamentos)
      setMetricPublic(dataMetrics)
    }

    fetchData()
  }, [contextData])

  const handleOpenModal = () => {
    setShowPdfModal(true)
  }

  const handleCloseModal = () => {
    setShowPdfModal(false)
  }

  console.log(selectedDepartament)

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <h1>Departamentos</h1>

        <Box>
          <Button
            sx={{ marginRight: '10px' }}
            variant="contained"
            onClick={handleOpenModal}
          >
            Gerar PDF
          </Button>
          {showPdfModal && (
            <PDFGenerator
              selectedDepartament={selectedDepartament}
              contextData={contextData}
              onClose={handleCloseModal}
            />
          )}

          <ExcelGeneratorDepartamentosButton
            selectedDepartament={selectedDepartament}
            contextData={contextData}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          marginTop: '30px'
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            width: '100%',
            gap: '20px'
          }}
        >
          <DepartamentsSelectors
            data={data}
            setSelectedYear={setSelectedYear}
            selectedYear={selectedYear}
            selectedDepartament={selectedDepartament}
            setSelectedDepartaments={setSelectedDepartament}
            setContextData={setContextData}
          />
          <Box sx={{ padding: '10px' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <SimpleMetric
                  title="Total Projetos"
                  value={
                    contextData
                      ? contextData.totalProjetos.toLocaleString('pt-BR')
                      : 0
                  }
                  color={'#4f93bb'}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <SimpleMetric
                  title="Projetos Concluídos"
                  value={
                    contextData
                      ? contextData.totalConcluidos.toLocaleString('pt-BR')
                      : 0
                  }
                  color={'#4f93bb'}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <SimpleMetric
                  title="Docentes"
                  value={
                    contextData
                      ? contextData.totalManager.toLocaleString('pt-BR')
                      : 0
                  }
                  color={'#4f93bb'}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <SimpleMetric
                  title="Discentes"
                  value={
                    contextData
                      ? contextData.totalDiscentes.toLocaleString('pt-BR')
                      : 0
                  }
                  color={'#4f93bb'}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <SimpleMetric
                  title="Externos"
                  value={
                    contextData
                      ? contextData.totalExterno.toLocaleString('pt-BR')
                      : 0
                  }
                  color={'#4f93bb'}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <SimpleMetric
                  title="Departamentos"
                  value={
                    contextData
                      ? contextData.qntd_departamento.toLocaleString('pt-BR')
                      : 0
                  }
                  color={'#4f93bb'}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <div style={{ width: '100%', marginTop: '30px' }}>
        <Typography
          variant="h1"
          sx={{ fontSize: '25px', fontWeight: 'bold', marginBottom: '10px' }}
        >
          Informações gerais sobre público
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Metrics
              title="Público interno estimado"
              value={contextData.estimadoInterno.toLocaleString('pt-BR')}
              color="#4f93bb"
              size={3}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Metrics
              title="Público externo estimado"
              value={contextData.estimadoExterno.toLocaleString('pt-BR')}
              color="rgb(96 187 79)"
              size={3}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Metrics
              title="Público atingido"
              value={contextData.atingido.toLocaleString('pt-BR')}
              color="rgb(79 187 182)"
              size={3}
            />

          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                backgroundColor: '#FFF',
                padding: '12px',
                borderRadius: '8px',
                height: '250px',
              }}
            >
              <ChartComponent
                title="Total Público"
                chartType="PieChart"
                data={metricPublic}
              />
            </Box>
          </Grid>
        </Grid>
      </div>
      <Grid container my={4} gap="8px">
        <Grid
          item
          xs={6}
          sx={{
            minHeight: '300px',
            maxHeight: '500px',

            padding: '12px',
            borderRadius: '8px'
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: '25px', fontWeight: 'bold', marginBottom: '10px' }}
          >
            Fonte de financiamento de projetos
          </Typography>
          <ChartComponent
            title="Tipos de Financiamento/Quantidade em projetos"
            chartType="ColumnChart"
            data={financingMetric}
          />
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            minHeight: '300px',
            maxHeight: '500px',

            padding: '12px',
            borderRadius: '8px'
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: '25px', fontWeight: 'bold', marginBottom: '10px' }}
          >
            Quantidade de projeto ao longo dos anos
          </Typography>
          <ChartComponent
            title="Gráfico da quantidade de projetos ao longo dos anos"
            chartType="LineChart"
            data={contextData ? contextData.yearsProject : []}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

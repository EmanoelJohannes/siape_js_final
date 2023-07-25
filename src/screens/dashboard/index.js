import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { Box, Grid } from '@mui/material';
import { Metrics } from '@/components/Metrics';
import ChartComponent from '@/components/ChartComponent';
import { SimpleMetric } from '@/components/SimpleMetric';
import { api } from '@/services/api';

export default function Dashboard({ data }) {
  const [metricPublic, setMetricPublic] = useState([]);
  const [generalMetricsData, setGeneralMetricsData] = useState(null);
  const [financingMetric, setFinanciingMetric] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      let response = await api.get('generalMetrics');
      let responseFinancing = await api.get('metrics-financing');
      let dataMetrics = [];

      dataMetrics.push(['Externo', data.estimadoExterno]);
      dataMetrics.push(['Interno', data.estimadoInterno]);
      dataMetrics.push(['Atingido', data.atingido]);

      dataMetrics.unshift(['Público', 'Quantidade']);

      setFinanciingMetric(responseFinancing.data.resultTipoFinanciamento);
      setMetricPublic(dataMetrics);
      setGeneralMetricsData(response.data);
    }

    fetchData();
  }, []);

  return (
    <Container>
      <h1>Dashboard</h1>
      <Grid
        container
        direction="column"
        spacing={2}
      >
        <Grid item>
          <h2
            style={{
              fontSize: '25px',
              fontWeight: 'bold',
              marginBottom: '10px'
            }}
          >
            Métricas gerais
          </h2>
        </Grid>
        <Grid
          item
          container
          spacing={2}
          justifyContent="space-between"
        >
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <SimpleMetric
              title="Total Projetos"
              value={
                generalMetricsData
                  ? generalMetricsData.totalProjetos.toLocaleString('pt-BR')
                  : 0
              }
              color={'#4f93bb'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <SimpleMetric
              title="Projetos Concluídos"
              value={
                generalMetricsData
                  ? generalMetricsData.totalConcluidos.toLocaleString('pt-BR')
                  : 0
              }
              color={'#4f93bb'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <SimpleMetric
              title="Docentes"
              value={
                generalMetricsData
                  ? generalMetricsData.totalManager.toLocaleString('pt-BR')
                  : 0
              }
              color={'#4f93bb'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <SimpleMetric
              title="Discentes"
              value={
                generalMetricsData
                  ? generalMetricsData.totalDiscentes.toLocaleString('pt-BR')
                  : 0
              }
              color={'#4f93bb'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <SimpleMetric
              title="Externos"
              value={
                generalMetricsData
                  ? generalMetricsData.totalExterno.toLocaleString('pt-BR')
                  : 0
              }
              color={'#4f93bb'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <SimpleMetric
              title="Departamentos"
              value={
                generalMetricsData
                  ? generalMetricsData.qntd_departamento.toLocaleString('pt-BR')
                  : 0
              }
              color={'#4f93bb'}
            />
          </Grid>
        </Grid>
        <Grid item>
          <h1
            style={{
              fontSize: '25px',
              fontWeight: 'bold',
              marginBottom: '10px'
            }}
          >
            Informações gerais sobre público
          </h1>
        </Grid>
        <Grid
          item
          container
          spacing={2}
          justifyContent={'space-between'}
        >
          <Grid item xs={12} sm={6} md={3}>
            <Metrics
              title="Público interno estimado"
              value={data.estimadoInterno.toLocaleString('pt-BR')}
              color={'#4f93bb'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Metrics
              title="Público externo estimado"
              value={data.estimadoExterno.toLocaleString('pt-BR')}
              color={'rgb(96 187 79)'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Metrics
              title="Público atingido"
              value={data.atingido.toLocaleString('pt-BR')}
              color={'rgb(79 187 182)'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                backgroundColor: '#FFF',
                padding: '12px',
                borderRadius: '8px',
                height: '250px'
              }}
            >
              <ChartComponent
                title="Total Público"
                chartType={'PieChart'}
                data={metricPublic}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          container
          spacing={2}
          justifyContent={'space-between'}
        >
          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={{
                backgroundColor: '#FFF',
                height: '300px',
                padding: '12px',
                borderRadius: '8px'
              }}
            >
              <ChartComponent
                title="Tipos de Financiamento/Quantidade em projetos"
                chartType={'ColumnChart'}
                data={financingMetric}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={{
                backgroundColor: '#FFF',
                height: '300px',
                padding: '12px',
                borderRadius: '8px'
              }}
            >
              <ChartComponent
                title="Gráfico da quantidade de projetos ao longo dos anos"
                chartType="LineChart"
                data={generalMetricsData ? generalMetricsData.yearsProject : []}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

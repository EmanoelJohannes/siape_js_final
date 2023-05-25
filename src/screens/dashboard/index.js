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
  
  console.log(data);

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
      console.log(response.data);
    }

    fetchData();
  }, []);

  return (
    <Container>
      <h1>Dashboard</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          marginTop: '30px'
        }}
      >
        <div>
          <h2
            style={{
              fontSize: '25px',
              fontWeight: 'bold',
              marginBottom: '10px'
            }}
          >
            Métricas gerais
          </h2>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            width: '100%'
          }}
        >
          <SimpleMetric
            title="Total Projetos"
            value={
              generalMetricsData
                ? generalMetricsData.totalProjetos.toLocaleString('pt-BR')
                : 0
            }
            color={'#4f93bb'}
          />
          <SimpleMetric
            title="Projetos Concluídos"
            value={
              generalMetricsData
                ? generalMetricsData.totalConcluidos.toLocaleString('pt-BR')
                : 0
            }
            color={'#4f93bb'}
          />
          <SimpleMetric
            title="Docentes"
            value={
              generalMetricsData
                ? generalMetricsData.totalManager.toLocaleString('pt-BR')
                : 0
            }
            color={'#4f93bb'}
          />
          <SimpleMetric
            title="Discentes"
            value={
              generalMetricsData
                ? generalMetricsData.totalDiscentes.toLocaleString('pt-BR')
                : 0
            }
            color={'#4f93bb'}
          />
          <SimpleMetric
            title="Externos"
            value={
              generalMetricsData
                ? generalMetricsData.totalExterno.toLocaleString('pt-BR')
                : 0
            }
            color={'#4f93bb'}
          />
          <SimpleMetric
            title="Departamentos"
            value={
              generalMetricsData
                ? generalMetricsData.qntd_departamento.toLocaleString('pt-BR')
                : 0
            }
            color={'#4f93bb'}
          />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          marginTop: '30px'
        }}
      >
        <div>
          <h1
            style={{
              fontSize: '25px',
              fontWeight: 'bold',
              marginBottom: '10px'
            }}
          >
            Informações gerais sobre público
          </h1>
        </div>
        <Grid
          item
          container
          width={'100%'}
          spacing={2}
          justifyContent={'space-between'}
        >
          <Metrics
            title="Público interno estimado"
            value={data.estimadoInterno.toLocaleString('pt-BR')}
            color={'#4f93bb'}
            size={3}
          />
          <Metrics
            title="Público externo estimado"
            value={data.estimadoExterno.toLocaleString('pt-BR')}
            color={'rgb(96 187 79)'}
            size={3}

          />
          <Metrics
            title="Público atingido"
            value={data.atingido.toLocaleString('pt-BR')}
            color={'rgb(79 187 182)'}
            size={3}

          />

          <Grid item>
            <Box
              sx={{
                backgroundColor: '#FFF',
                padding: '12px',
                borderRadius: '8px',
                height: '250px',
                width: '300px'
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
      </div>
      <Grid item container my="24px" justifyContent={'space-between'}>
        <Box
          sx={{
            backgroundColor: '#FFF',
            height: '300px',
            width: '47%',
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

        <Box
          sx={{
            backgroundColor: '#FFF',
            height: '300px',
            width: '47%',
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
    </Container>
  );
}

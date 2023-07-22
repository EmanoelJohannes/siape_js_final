/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { parseCookies } from 'nookies';
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Checkbox,
  Select
} from '@mui/material';

import { useTheme } from '@mui/material/styles';
import { api } from '@/services/api';

function Selectors({
  data,
  type,
  years,
  typeChart,
  setTypeChart,
  filtredDepartaments,
  setFiltredDepartaments,
  setSelectedDepartament,
  setSelectedManagers,
  selectedYear,
  setSelectedYear,
  naoRepetidos,
  setNaoRepetidos,
  contextData,
  setContextData,
  setQtdPeopleByYear
}) {
  const theme = useTheme();
  const { '@siape:action': action } = parseCookies();

  function getStyles(departament, filtredDepartaments, theme) {
    return {
      fontWeight:
        filtredDepartaments.indexOf(departament) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium
    };
  }

  const handleChange = (event) => {
    const {
      target: { value }
    } = event;

    if (value === undefined) {
      setFiltredDepartaments([]);
    } else {
      setFiltredDepartaments(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value
      );
    }
  };

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 300,
        width: 250
      }
    }
  };

  const handleCheckboxChange = (event) => {
    setNaoRepetidos(event.target.checked);
  };

  useEffect(() => {
    async function filterDepartaments() {
      const aux = [];
      let auxManager = 0;

      if (!!filtredDepartaments) {
        const selectedDepartments = contextData.peoplesFromDepartaments.filter(
          (departament_element) =>
            filtredDepartaments.includes(departament_element[0])
        );

        if (selectedDepartments.length > 0) {
          const hasDepartmentColumn = selectedDepartments.some(
            (department) => department[0] === 'Departamento'
          );

          if (!hasDepartmentColumn) {
            aux.push(['Departamento', 'Quantidade']);
          }

          selectedDepartments.forEach((department) => {
            aux.push(department);
            auxManager += department[1];
          });
        }
      }
      
      setSelectedDepartament(aux);
      setSelectedManagers(auxManager);

      if (filtredDepartaments.includes(undefined)) {
        setSelectedDepartament([]);
        setSelectedManagers(0);
        setFiltredDepartaments([]);
      }

      if (filtredDepartaments.length) {
        const response = await api.post(
          `/post-departament-in-years?type=${action}`,
          filtredDepartaments
        );
        setQtdPeopleByYear(response.data.matrixData);
      } else {
        setQtdPeopleByYear([]);
      }
    }

    filterDepartaments();
  }, [contextData, filtredDepartaments]);

  useEffect(() => {
    async function fetchData() {
      let response = [];

      if (!selectedYear || selectedYear === 0) {
        if (naoRepetidos) {
          if (type === 'docentes') {
            response = await api.get('docentesNaoRepetidos');
            setContextData(response.data);
          } else if (type === 'discentes') {
            response = await api.get('discentesNaoRepetidos');
            setContextData(response.data);
          } else if (type === 'externos') {
            response = await api.get('externosNaoRepetidos');
            setContextData(response.data);
          }
        } else {
          setContextData(data);
        }
      } else {
        if (type === 'docentes') {
          response = await api.get(`docentes-by-year/${selectedYear}`);
        } else if (type === 'discentes') {
          response = await api.get(`discentes-by-year/${selectedYear}`);
        } else if (type === 'externos') {
          response = await api.get(`externos-by-year/${selectedYear}`);
        }
        setContextData(response.data);
        setSelectedDepartament([]);
        setSelectedManagers(0);
      }
    }

    fetchData();
  }, [naoRepetidos, selectedYear]);

  return (
    <>
      <FormControl variant="outlined" fullWidth sx={{ m: 1 }}>
        <InputLabel>Departamento</InputLabel>
        <Select
          value={filtredDepartaments}
          multiple
          onChange={handleChange}
          label="Departamento"
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          <MenuItem value={undefined}>Limpar busca</MenuItem>
          {data.departamentos.map((departament) => (
            <MenuItem
              key={departament}
              value={departament}
              style={getStyles(departament, filtredDepartaments, theme)}
            >
              <Checkbox
                checked={filtredDepartaments.indexOf(departament) > -1}
              />
              {departament}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl variant="outlined" fullWidth sx={{ m: 1 }}>
        <InputLabel>Selecione o ano</InputLabel>
        <Select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          MenuProps={MenuProps}
          label="Selecione o ano"
        >
          <MenuItem value={0}>Todos</MenuItem>
          {years.map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl variant="outlined" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel>Tipo de gráfico</InputLabel>
        <Select
          value={typeChart}
          onChange={(event) => setTypeChart(event.target.value)}
          label="Tipo de gráfico"
        >
          <MenuItem value="ColumnChart">Coluna</MenuItem>
          <MenuItem value="AreaChart">Área</MenuItem>
          <MenuItem value="LineChart">Linha</MenuItem>
          <MenuItem value="PieChart">Torta</MenuItem>
        </Select>
      </FormControl>

      <FormControlLabel
        control={
          <Checkbox
            checked={naoRepetidos}
            onChange={handleCheckboxChange}
            name="naoRepetidos"
            color="primary"
          />
        }
        label={`Considerar ${type} não repetidos`}
      />
    </>
  );
}

export default Selectors;

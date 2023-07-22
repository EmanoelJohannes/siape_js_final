import { useEffect } from 'react'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Checkbox,
  Select,
  Typography
} from '@mui/material'

import { useTheme } from '@mui/material/styles'
import { api } from '@/services/api'
import { Container } from '../Container'

function DepartamentsSelectors({
  data,
  selectedDepartament,
  selectedYear,
  setSelectedYear,
  setSelectedDepartaments,
  setContextData
}) {
  const theme = useTheme()

  function getStyles(departament, selectedDepartament, theme) {
    return {
      fontWeight:
        selectedDepartament.indexOf(departament) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium
    }
  }

  function handleChange(event) {
    const hasLimparBusca = event.target.value.filter(value => value === undefined);
    if (hasLimparBusca.length > 0) {
      setSelectedDepartaments([]);
      setContextData(data);

    } else {
      setSelectedDepartaments(event.target.value);
    }
  }

  useEffect(() => {
    let requestData = [];

    if (selectedYear != 0) {
      requestData = [selectedDepartament, selectedYear.toString()]
    } else {
      requestData = [selectedDepartament]
    }

    if (requestData[0].length > 0) {
      async function fetchData() {
        const response = await api.post(`generalMetrics-in-departaments`, requestData);
        setContextData(response.data);
      }
  
      fetchData()
    }

  }, [selectedDepartament, selectedYear])

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 300,
        width: 250
      }
    }
  }

  return (
    <Container>
      <Typography variant="h5">
        Filtre por departamentos e anos logo abaixo:
      </Typography>
      <FormControl variant="outlined" fullWidth sx={{ m: 1 }}>
        <InputLabel>Departamento</InputLabel>
        <Select
          value={selectedDepartament}
          multiple
          onChange={(e) => handleChange(e)}
          label="Departamento"
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
        >
          <MenuItem value={undefined}>Limpar busca</MenuItem>
          {data.departamentos.map(departament => (
            <MenuItem
              key={departament}
              value={departament}
              style={getStyles(departament, selectedDepartament, theme)}
            >
              <Checkbox
                checked={selectedDepartament.indexOf(departament) > -1}
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
          onChange={e => setSelectedYear(e.target.value)}
          MenuProps={MenuProps}
          label="Selecione o ano"
        >
          <MenuItem value={0}>Todos</MenuItem>
          <MenuItem value={2020}>2020</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2023}>2023</MenuItem>
        </Select>
      </FormControl>
    </Container>
  )
}

export default DepartamentsSelectors

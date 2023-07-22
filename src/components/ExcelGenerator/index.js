import { Button } from '@mui/material'
import * as XLSX from 'xlsx'

const ExcelGeneratorButton = ({ peoplesFromDepartaments, contextData, selectedManagers, type }) => {
  const downloadExcel = () => {
    const dataWithGeneralInfo = [
      [`Quantidade total de ${type} no ano`, contextData.totalPeoples],
      [
        `Quantidade de departamentos total com ${type}`,
        contextData.peoplesFromDepartaments.length
      ],
      [`Total de ${type} selecionados`, selectedManagers],
      [],
      ...peoplesFromDepartaments
    ]

    const ws = XLSX.utils.aoa_to_sheet(dataWithGeneralInfo)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')
    XLSX.writeFile(wb, `Relatório_de_${type}.xlsx`)
  }

  return (
    <Button variant="contained" color="primary" onClick={downloadExcel}>
      Baixar relatório Excel
    </Button>
  )
}

export default ExcelGeneratorButton

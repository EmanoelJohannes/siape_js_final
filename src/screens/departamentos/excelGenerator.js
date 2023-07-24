import { Button } from '@mui/material'
import * as XLSX from 'xlsx'

const ExcelGeneratorDepartamentosButton = ({ contextData, selectedDepartament }) => {
  const downloadExcel = () => {
    let dataWithGeneralInfo = [
      ['Relatório de Departamentos'],
      [],
      ['Departamentos selecionados', ...selectedDepartament],
      [],
      ['Informações Gerais'],
      ['Total de Docentes', contextData.totalManager],
      ['Total de Discentes', contextData.totalDiscentes],
      ['Total Externo', contextData.totalExterno],
      ['Quantidade de Departamentos', contextData.qntd_departamento],
      ['Total de Projetos', contextData.totalProjetos],
      ['Total Concluídos', contextData.totalConcluidos],
      [],
      ['Ano dos Projetos'],
    ]

    dataWithGeneralInfo = dataWithGeneralInfo.concat(
      contextData.yearsProject.map(([year, total]) => [`Ano: ${year}, Total: ${total}`])
    )

    dataWithGeneralInfo.push([])

    dataWithGeneralInfo.push(['Tipos de Financiamentos'])
    dataWithGeneralInfo = dataWithGeneralInfo.concat(
      contextData.tiposFinanciamentos.map(([tipo, total]) => [`Tipo: ${tipo}, Total: ${total}`])
    )

    dataWithGeneralInfo.push([])
    dataWithGeneralInfo.push(['Estimativas'])
    dataWithGeneralInfo.push(['Estimado Externo', contextData.estimadoExterno])
    dataWithGeneralInfo.push(['Estimado Interno', contextData.estimadoInterno])
    dataWithGeneralInfo.push(['Atingido', contextData.atingido])
    dataWithGeneralInfo.push([])
    dataWithGeneralInfo.push(['Gerado pelo software SIAPE'])

    const ws = XLSX.utils.aoa_to_sheet(dataWithGeneralInfo)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')
    XLSX.writeFile(wb, `Relatório_de_Departamentos.xlsx`)
  }

  return (
    <Button variant="contained" color="primary" onClick={downloadExcel}>
      Baixar relatório Excel
    </Button>
  )
}

export default ExcelGeneratorDepartamentosButton

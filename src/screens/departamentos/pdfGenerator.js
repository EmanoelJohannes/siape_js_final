import React from 'react'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'
import ReactDOM from 'react-dom'
import { PDFViewer } from '@react-pdf/renderer'
import { Modal } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@mui/material'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 'none',
    maxHeight: '90vh',
    overflow: 'auto',
    width: '100vh'
  },
  pdfViewer: {
    width: '100%',
    height: '90vh' // Ajuste a altura conforme necessário
  }
}))

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    padding: 20
  },
  section: {
    marginBottom: 10
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 3
  },
  content: {
    fontSize: 12
  },
  footer: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 12,
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
})

const PDFGenerator = ({ selectedDepartament, contextData, onClose }) => {
  const classes = useStyles()

  return (
    <Modal className={classes.modal} open={true} onClose={onClose}>
      <div className={classes.paper}>
        <Button variant="contained" onClick={onClose}>
          Fechar
        </Button>

        <PDFViewer className={classes.pdfViewer}>
          <Document>
            <Page style={styles.page}>
              <View>
                <Text style={styles.header}>Relatório de Departamentos</Text>
              </View>

              {selectedDepartament.length > 0 && 
                <View style={styles.section}>
                  <Text style={styles.title}>Departamentos selecionados</Text>
                  {selectedDepartament.map((department, index) => (
                    <Text key={index}>{department}</Text>
                  ))}
                </View>
              }
              
              <View style={styles.section}>
                <Text style={styles.title}>Informações Gerais</Text>
                <View style={styles.content}>
                  <Text>Total de Docentes: {contextData.totalManager}</Text>
                  <Text>Total de Discentes: {contextData.totalDiscentes}</Text>
                  <Text>Total Externo: {contextData.totalExterno}</Text>
                  <Text>
                    Quantidade de Departamentos: {contextData.qntd_departamento}
                  </Text>
                  <Text>Total de Projetos: {contextData.totalProjetos}</Text>
                  <Text>Total Concluídos: {contextData.totalConcluidos}</Text>
                </View>
              </View>

              <View style={styles.section}>
                <Text style={styles.title}>Ano dos Projetos</Text>
                <View style={styles.content}>
                  {contextData.yearsProject.map(([year, total], index) => (
                    <Text key={index}>
                      Ano: {year}, Total: {total}
                    </Text>
                  ))}
                </View>
              </View>

              <View style={styles.section}>
                <Text style={styles.title}>Tipos de Financiamentos</Text>
                <View style={styles.content}>
                  {contextData.tiposFinanciamentos.map(
                    ([tipo, total], index) => (
                      <Text key={index}>
                        Tipo: {tipo}, Total: {total}
                      </Text>
                    )
                  )}
                </View>
              </View>

              <View style={styles.section}>
                <Text style={styles.title}>Estimativas</Text>
                <View style={styles.content}>
                  <Text>Estimado Externo: {contextData.estimadoExterno}</Text>
                  <Text>Estimado Interno: {contextData.estimadoInterno}</Text>
                  <Text>Atingido: {contextData.atingido}</Text>
                </View>
              </View>

              <View>
                <Text style={styles.footer}>
                  Gerado pelo software SIAPE
                </Text>
              </View>
            </Page>
          </Document>
        </PDFViewer>
      </div>
    </Modal>
  )
}

export default PDFGenerator

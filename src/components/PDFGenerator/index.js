import React from 'react'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'
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

const listStyles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  listItemNumber: {
    width: '20%',
  },
  listItemText: {
    width: '80%',
  },
});

const List = ({ data }) => (
  <View>
    {data.map((item, index) => (
      index !== 0 &&
      <View style={listStyles.listItem} key={index}>
        <Text style={listStyles.listItemNumber}>{item[0]}</Text>
        <Text style={listStyles.listItemText}>{item[1]}</Text>
      </View>
    ))}
  </View>
);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const PDFGenerator = ({ peoplesFromDepartaments, contextData, selectedManagers, onClose, type }) => {
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
                <Text style={styles.header}>Relatório de {type}</Text>
              </View>

              <View style={styles.section}>
                <Text style={styles.title}>Informações Gerais</Text>
                <View style={styles.content}>
                  <Text>Quantidade total de {type} no ano: {contextData.totalPeoples}</Text>
                  <Text>Quantidade de departamentos total com {type}: {contextData.peoplesFromDepartaments.length}</Text>
                  <Text>Total de {type} selecionados: {selectedManagers}</Text>
                </View>
              </View>
              
              <View style={styles.section}>
                <Text style={styles.title}>{capitalizeFirstLetter(type)} por departamento</Text>
                {peoplesFromDepartaments &&
                  <List data={peoplesFromDepartaments} />
                }
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

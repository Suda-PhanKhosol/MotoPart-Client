import { Button, Card, Grid } from '@mui/material'
import React from 'react'
import TableBasic from 'src/views/tables/TableBasic'
import Plus from 'mdi-material-ui/Plus'
import Export from 'mdi-material-ui/FileExcel'

export default function Table(props: any) {
  //#region Props
  const {} = props
  //#endregion

  //#region State & Variables
  //#endregion

  //#region Fucntions
  //#endregion

  //#region Calls Api
  //#endregion

  //#region Effect
  //#endregion
  return (
    <div>
      <Card style={{ padding: 10 }}>
        <Grid container direction='row' justifyContent='flex-end'>
          <Button variant='contained' startIcon={<Plus />} style={{ borderRadius: 20, marginRight: 5 }}>
            Add New
          </Button>

          <Button variant='outlined' startIcon={<Export />} style={{ borderRadius: 20 }}>
            Export File
          </Button>
        </Grid>
        <TableBasic></TableBasic>
      </Card>
    </div>
  )
}

import React from 'react'
import Search from 'src/components/pages/motoType/Search'
import Table from 'src/components/pages/motoType/Table'

export default function index() {
  return (
    <div>
      <Search headerName='Motorbike Types'></Search>
      <br />
      <Table></Table>
    </div>
  )
}

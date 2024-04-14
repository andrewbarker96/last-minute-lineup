import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width:25 },
  {
    field: 'name',
    headerName:  'Name',
    width: 150,
  },
  {
    field: 'availability',
    headerName: 'Availability',
    sortable: false,
    width: 300,
  }, 
  {
    field: 'playStyle',
    headerName: 'Play Style',
    sortable: true, 
    width: 150,
  }, 
  {
    field: 'phoneNo',
    headerName: 'Phone No.',
    sortable: false,
    width: 125,
  }

];
const rows = [
  {id: '1', name: 'Jon Snow', availability: ['Monday', 'Wednesday', 'Friday'], playStyle: 'Recreational', phoneNo: '123-456-7890' },
  {id: '2', name: 'Cersei Lannister', availability: ['Tuesday', 'Thursday'], playStyle: 'Competitive', phoneNo: '987-654-3210' },
  {id: '3', name: 'Jaime Lannister', availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], playStyle: 'Tourney Player', phoneNo: '555-555-5555' },
  {id: '4', name: 'Arya Stark', availability: ['Tuesday', 'Thursday'], playStyle: 'Recreational', phoneNo: '999-999-9999' },
  {id: '5', name: 'Daenerys Targaryen', availability: ['Monday', 'Wednesday', 'Friday'], playStyle: 'Competitive', phoneNo: '111-222-3333' },
  {id: '6', name: 'Stacey Melisandre', availability: ['Tuesday', 'Thursday'], playStyle: 'Tourney Player', phoneNo: '444-444-4444' },
  {id: '7', name: 'Ferrara Clifford', availability: ['Monday', 'Wednesday', 'Friday'], playStyle: 'Recreational', phoneNo: '777-777-7777' },
  {id: '8', name: 'Rossini Frances', availability: ['Tuesday', 'Thursday'], playStyle: 'Competitive', phoneNo: '888-888-8888' },
  {id: '9', name: 'Harvey Roxie', availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], playStyle: 'Tourney Player', phoneNo: '666-666-6666' },
  {id: '10', name: 'John Doe', availability: ['Monday', 'Wednesday', 'Friday'], playStyle: 'Recreational', phoneNo: '555-123-4567' },
  {id: '11', name: 'Jane Smith', availability: ['Tuesday', 'Thursday'], playStyle: 'Competitive', phoneNo: '333-444-5555' },
  {id: '12', name: 'Alice Johnson', availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], playStyle: 'Tourney Player', phoneNo: '777-888-9999' },
  {id: '13', name: 'Bob Williams', availability: ['Tuesday', 'Thursday'], playStyle: 'Recreational', phoneNo: '111-222-3333' },
  {id: '14', name: 'Emily Brown', availability: ['Monday', 'Wednesday', 'Friday'], playStyle: 'Competitive', phoneNo: '999-888-7777' },
  {id: '15', name: 'Michael Jones', availability: ['Tuesday', 'Thursday'], playStyle: 'Tourney Player', phoneNo: '333-222-1111' },
  {id: '16', name: 'David Garcia', availability: ['Monday', 'Wednesday', 'Friday'], playStyle: 'Recreational', phoneNo: '222-333-4444' },
  {id: '17', name: 'Mary Miller', availability: ['Tuesday', 'Thursday'], playStyle: 'Competitive', phoneNo: '888-999-0000' },
  {id: '18', name: 'Sarah Davis', availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], playStyle: 'Tourney Player', phoneNo: '444-555-6666' },
  {id: '19', name: 'Paul Rodriguez', availability: ['Tuesday', 'Thursday'], playStyle: 'Recreational', phoneNo: '777-666-5555' },
  {id: '20', name: 'Jennifer Anderson', availability: ['Monday', 'Wednesday', 'Friday'], playStyle: 'Competitive', phoneNo: '123-456-7890' },
  {id: '21', name: 'Juan Martinez', availability: ['Tuesday', 'Thursday'], playStyle: 'Tourney Player', phoneNo: '987-654-3210' },
  {id: '22', name: 'Luis Hernandez', availability: ['Monday', 'Wednesday', 'Friday'], playStyle: 'Recreational', phoneNo: '555-555-5555' },
  {id: '23', name: 'Maria Gonzalez', availability: ['Tuesday', 'Thursday'], playStyle: 'Recreational', phoneNo: '999-999-9999' },
  {id: '24', name: 'Ana Perez', availability: ['Monday', 'Wednesday', 'Friday'], playStyle: 'Competitive', phoneNo: '111-222-3333' },
  {id: '25', name: 'Jose Torres', availability: ['Tuesday', 'Thursday'], playStyle: 'Tourney Player', phoneNo: '444-444-4444' },
  {id: '26', name: 'Carlos Ramirez', availability: ['Monday', 'Wednesday', 'Friday'], playStyle: 'Recreational', phoneNo: '777-777-7777' },
  {id: '27', name: 'Luisa Flores', availability: ['Tuesday', 'Thursday'], playStyle: 'Competitive', phoneNo: '888-888-8888' },
  {id: '28', name: 'Rosa Gomez', availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], playStyle: 'Tourney Player', phoneNo: '666-666-6666' },
  { id: '29', name: 'Jorge Diaz', availability: ['Tuesday', 'Thursday'], playStyle: 'Recreational', phoneNo: '555-123-4567' },
  { id: '30', name: 'Miguel Vargas', availability: ['Monday', 'Wednesday', 'Friday'], playStyle: 'Competitive', phoneNo: '333-444-5555' },
  { id: '31', name: 'Alejandro Castro', availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], playStyle: 'Tourney Player', phoneNo: '777-888-9999' },
  { id: '32', name: 'Sofia Hernandez', availability: ['Tuesday', 'Thursday'], playStyle: 'Recreational', phoneNo: '111-222-3333' },
  { id: '33', name: 'Isabella Lopez', availability: ['Monday', 'Wednesday', 'Friday'], playStyle: 'Competitive', phoneNo: '999-888-7777' },
  { id: '34', name: 'Camila Gonzalez', availability: ['Tuesday', 'Thursday'], playStyle: 'Tourney Player', phoneNo: '333-222-1111' },
  { id: '35', name: 'Valentina Perez', availability: ['Monday', 'Wednesday', 'Friday'], playStyle: 'Recreational', phoneNo: '222-333-4444' },
  { id: '36', name: 'Luciana Rodriguez', availability: ['Tuesday', 'Thursday'], playStyle: 'Competitive', phoneNo: '888-999-0000' },
  { id: '37', name: 'Martina Martinez', availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], playStyle: 'Tourney Player', phoneNo: '444-555-6666' },
  { id: '38', name: 'Agustina Hernandez', availability: ['Tuesday', 'Thursday'], playStyle: 'Recreational', phoneNo: '777-666-5555' },
  { id: '39', name: 'Antonella Gonzalez', availability: ['Monday', 'Wednesday', 'Friday'], playStyle: 'Competitive', phoneNo: '123-456-7890' },
  { id: '40', name: 'Mia Perez', availability: ['Tuesday', 'Thursday'], playStyle: 'Tourney Player', phoneNo: '987-654-3210' },
 
];

export default function FreeAgentsTable() {

  // const handleRowClick = (param: any) => {
  //   const id = param.row.id;
  //   router.push(`/profile/${id}`);
  // };

  const tempRowClick = (param: any) => {
    console.log(param.row);
    <Link href='/profile' />
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box sx={{ height:'fit', minWidth:'fit', maxWidth: '1920px' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 15,
                },
              },
            }}
            pageSizeOptions={[15]}
            // OnRowClick={handleRowClick} // Will be used when we have a profile page
            onRowClick={tempRowClick}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
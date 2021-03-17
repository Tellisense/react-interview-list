import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    marginTop: '4rem',

  },
  tableContainer: {
    overflow: 'auto'
  }
});


export default function BasicTable({ tableData: rows }) {
  const classes = useStyles();

  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell width="15%" align="left">Name</TableCell>
            <TableCell width="15%" align="left">Username</TableCell>
            <TableCell width="20%" align="left">Email</TableCell>
            <TableCell width="20%" align="left">Website</TableCell>
            <TableCell width="20%" align="left">Company</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 && rows.map((row) => (
            <TableRow key={row?.id}>
              <TableCell align="left">
                {row?.name}
              </TableCell>
              <TableCell align="left" >
                {row?.username}
              </TableCell>
              <TableCell align="left">{row?.email}</TableCell>
              <TableCell align="left">{row?.website}</TableCell>
              <TableCell align="left">{row?.company}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
import * as React from 'react';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { useState , useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function Home() {
 const [rows , setrow] = useState([])

 const getData = ()=>{
    axios.get("https://appartment-manager.herokuapp.com/flat").then((res)=>{
        console.log(res.data)
        setrow([...res.data])
        console.log(rows)
    })
 }

  useEffect(() => {
    getData() 
 }, []);




  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Flat Number</StyledTableCell>
            <StyledTableCell >Block</StyledTableCell>
            <StyledTableCell >Type</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.flatNumber}
              </StyledTableCell>
              <StyledTableCell >{row.Block}</StyledTableCell>
              <StyledTableCell >{row.type}</StyledTableCell>
              {/* <StyledTableCell align="right">{row.resident}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



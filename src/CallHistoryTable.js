import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// custom imports
import './CallHistory.css'

// CONSTANTS
const headers = [
    'Updated At',
    'Customer Phone', 
    'Suggested Vanity Number',
    'Option 1', 
    'Option 2', 
    'Option 3', 
    'Option 4',
    'Option 5'
];

// add the options to the call history object as properties
const extractOptions = (record) => {
    const { numberOptions } = record
    for(let i = 0; i < numberOptions?.length; i += 1) {
        record[`option${i+1}`] = numberOptions[i];
    }
}

// COMPONENT
export default function CallHistoryTable(props) {
  // modify the input for use in the table
  const {callHistory} = props;
  for(let i = 0; i < callHistory?.length; i += 1) {
    extractOptions(callHistory[i]);
  }

  return (
    <TableContainer component={Paper}>
      <Table className={'Table'} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map(header => <TableCell key={header}>{header}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {callHistory?.map((record) => (
            <TableRow key={record.customerPhone}>
              <TableCell component="th" scope="row">
                {new Date(record.lastUpdated).toLocaleString()}
              </TableCell>
              <TableCell align="left">{record.customerPhone}</TableCell>
              <TableCell align="left">{record.vanityNumber}</TableCell>
              <TableCell align="right">{record.option1}</TableCell>
              <TableCell align="right">{record.option2}</TableCell>
              <TableCell align="right">{record.option3}</TableCell>
              <TableCell align="right">{record.option4}</TableCell>
              <TableCell align="right">{record.option5}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
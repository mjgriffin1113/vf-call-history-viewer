// third party imports
import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
// custom imports
import './CallHistory.css';
import CallHistoryTable from './CallHistoryTable'

// COMPONENT
function CallHistory() {
  // get 5 most recent records
  const getData = () => {
    console.log('fetching data');
    // this needs to be manually updated before deploy as long as the web app remains a static s3 hosted site 
    // (no dynamic injection of environment variables)
    fetch('https://lajsxhrwbj.execute-api.us-east-1.amazonaws.com/Staging/call-history')
      .then((response) => response.json())
      .then((data) => setCallHistory(data));
  };

  const [callHistory, setCallHistory] = useState([]);

  // load the data
  useEffect(() => {
    // initial data load
    getData();
    // refresh the data every 10 seconds
    const interval = setInterval(() => {
      getData();
    }, 10000);
    // This is the equivilent of componentWillUnmount in a React Class component.
    return () => clearInterval(interval);
  }, []);

  return (
    <Grid container>
      <Grid item xs={12} className={'CallHistory'}>
        <h1>Vanity Number Generator - Call History</h1>
        <CallHistoryTable callHistory={callHistory}/>
      </Grid>
    </Grid>
  );
}

export default CallHistory;

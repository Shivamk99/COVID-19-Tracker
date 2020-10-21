import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
        <Typography gutterBottom variant="h5" component="h2">World-Wide</Typography>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infected-Info"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Cases from COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recovered-Info"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Recoveries from COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Deaths-Info"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Deaths caused by COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Info;

import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    console.log(confirmed);
    if(!confirmed) {
        return 'Loading...';
    }

    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">


                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography color="textSecondary" variant="h5">
                        <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography color="textSecondary" gutterBottom>Number of active cases of Covid 19</Typography>
                </Grid>


                <Grid item component={Card}  xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography color="textSecondary" variant="h5"><CountUp start={0} end={recovered.value} duration={2.5} separator=","/></Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography color="textSecondary" gutterBottom>Number of recovered cases of Covid 19</Typography>
                </Grid>


                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography color="textSecondary" variant="h5"><CountUp start={0} end={deaths.value} duration={2.5} separator=","/></Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography color="textSecondary" gutterBottom>Number of deaths of Covid 19</Typography>
                </Grid>


            </Grid>
        </div>
    )
}

export default Cards;
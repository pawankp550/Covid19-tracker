import React from 'react';

import styles from './cards.module.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import Countup from 'react-countup'
import cx from 'classnames'

const Cards = ({data: { confirmed, deaths,  recovered, lastUpdate }}) => {
    if(!confirmed) {
        return (
            <div>Loading</div>
        )
    }
    return (
        <div className = {styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5" ><Countup start={0} end={confirmed.value} duration={1.5} separator=","></Countup></Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >Number of infections from Covid19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5" ><Countup start={0} end={deaths.value} duration={1.5} separator=","></Countup></Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >Number of deaths from Covid19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5" ><Countup start={0} end={recovered.value} duration={1.5} separator=","></Countup></Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >Number of recoveries from Covid19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
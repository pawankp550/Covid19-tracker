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
                        <div className={styles.cart_title_wrapper}><Typography color="textSecondary" className={styles.card_title} gutterBottom>Infected</Typography></div>
                        <Typography variant="h5" className={styles.card_number}><Countup start={0} end={confirmed.value} duration={1.5} separator=","></Countup></Typography>
                        <Typography color="textSecondary" className={styles.card_date}>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" className={styles.card_text}>Number of infections from Covid19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <div className={styles.cart_title_wrapper}><Typography color="textSecondary" className={styles.card_title} gutterBottom>Deaths</Typography></div>
                        <Typography variant="h5" className={styles.card_number}><Countup start={0} end={deaths.value} duration={1.5} separator=","></Countup></Typography>
                        <Typography color="textSecondary" className={styles.card_date}>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" className={styles.card_text}>Number of deaths from Covid19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <div className={styles.cart_title_wrapper}><Typography color="textSecondary" className={styles.card_title} gutterBottom>Recovered</Typography></div>
                        <Typography variant="h5" className={styles.card_number}><Countup start={0} end={recovered.value} duration={1.5} separator=","></Countup></Typography>
                        <Typography color="textSecondary" className={styles.card_date}>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" className={styles.card_text} >Number of recoveries from Covid19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
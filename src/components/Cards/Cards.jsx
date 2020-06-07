import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';
import Button from '@material-ui/core/Button';


const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading....!'
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid style={{ backgroundColor: 'rgba(208, 208, 241, 0.5)' }} item component={Card} xs={12} md={3} className={cx(styles.test, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography varaint="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2">Number of active cases of Covid-19 </Typography>
                    </CardContent>
            </Grid>
                <Grid style={{ backgroundColor: 'rgba(188, 253, 188, 0.5)' }} item component={Card} xs={12} md={3} className={cx(styles.test, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recoverd</Typography>
                        <Typography varaint="h5">
                            <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2">Number of recovered cases of Covid-19 </Typography>
                    </CardContent>
                </Grid>
                <Grid style={{ backgroundColor: 'rgba(245, 192, 192, 0.5)' }}  item component={Card} xs={12} md={3} className = { cx(styles.test, styles.deaths) } >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography varaint="h5">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2">Number of Death cases from Covid-19 </Typography>
                    </CardContent>
                </Grid>
            
            <Grid className={styles.btnGrid} >
                <Button style={{ backgroundColor: '#4A148C' }} className={styles.btnMyGov} variant="contained" color="primary" href="https://www.mohfw.gov.in/">
                    mohfw
                </Button>
                <Button style={{ backgroundColor: '#004D40' }} className={styles.btnMyGov} variant="contained" color="primary" href="https://www.mygov.in/covid-19">
                    mygov
                </Button>
                <Button style={{ backgroundColor: '#900C3F' }} className={styles.btnMyGov} variant="contained" color="primary" href="https://twitter.com/who?lang=en">
                    WHO
                </Button>
                <Button style={{ backgroundColor: '#581845' }} className={styles.btnMyGov} variant="contained" color="primary" href="https://twitter.com/PIB_India">
                    PIB:IN
                </Button>
                </Grid>
            </Grid>
            
        </div>



    )
}

export default Cards;















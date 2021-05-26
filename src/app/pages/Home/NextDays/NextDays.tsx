import {Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import dummyTemps from '../../../dummyData/dummyTemps'
import NextDay from './NextDay'

const useStyles = makeStyles(theme => ({
    nextDays: {
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            borderRadius: 10,
            overflow:'hidden'
        }
    },
    
}))

const NextDays = () => {


    const classes = useStyles()

    return (
        <div className={classes.nextDays}>
            <Grid container >
                {dummyTemps.DailyForecasts.map((d, i) => (
                    <NextDay day={d} iterator={i} key={d.Date}/>
                ))}
            </Grid>
        </div>
    )
}

export default NextDays
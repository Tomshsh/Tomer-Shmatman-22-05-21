import { Divider, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import dummyTemps from '../../../dummyData/dummyTemps'
import img from "../../../../icons/IntermittentClouds(day).4a7ba1cb.svg"

const useStyles = makeStyles(theme => ({
    nextDays: {
        borderRadius: 10,
        height: 300,
        boxShadow: "0 20px 43px hsla(0,0%,39.2%,0.05)",
        backgroundColor: theme.palette.primary.main,
        textAlign: 'center'
    },
    daysGrid: {
        height: '100%'
    },
    dayItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '25px 15px'
    },
    tempBar: {
        width: "5vw",
        backgroundColor: theme.palette.success.light,
        height: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        '&.max': {
            justifyContent: 'start',
        },
        '&.min': {
            justifyContent: 'end'
        },
    },
    minMaxItem: {
        display: 'flex',
        alignItems: 'baseline',

        '& h4, h5': { fontWeight: 'bold', },
        '& h5': { color: theme.palette.text.secondary }
    }
}))

const NextDays = () => {

    const getDayAbbr = (date: string) => {
        const dateFormat = new Date(date)
        return new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(dateFormat)
    }

    const getDate = (date: string) => {
        const dateFormat = new Date(date)
        // @ts-ignore
        return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(dateFormat)
    }

    const classes = useStyles()

    return (
        <div className={classes.nextDays}>
            <Grid container className={classes.daysGrid} >
                {dummyTemps.DailyForecasts.map((d, i) => (
                    <>
                        {i > 0 && <Divider orientation="vertical" flexItem />}
                        <Grid item key={d.Date} xs className={classes.dayItem}>
                            <div>
                                <Typography variant="h5">{getDayAbbr(d.Date)}</Typography>
                                <Typography variant="caption">{getDate(d.Date)}</Typography>
                            </div>
                            <div>
                                <img src={img} alt="" style={{ marginRight: '20px', display:'block' }} />
                            </div>
                            <div className={classes.minMaxItem}>
                                <Typography variant="h4">{d.Temperature.Maximum.Value}°</Typography>
                                <Typography variant="h5">/{d.Temperature.Maximum.Value}°</Typography>
                            </div>
                        </Grid>
                    </>
                ))}
            </Grid>
        </div>
    )
}

export default NextDays
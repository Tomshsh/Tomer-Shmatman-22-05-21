import React from 'react'
import img from "../../../../icons/IntermittentClouds(day).4a7ba1cb.svg"
import { Divider, Grid, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    gridItem: {
        [theme.breakpoints.down('sm')]: { padding: theme.spacing(1) }
    },
    dayItem: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '25px 15px',
        alignItems: 'center',
        boxShadow: "0 20px 43px hsla(0,0%,39.2%,0.05)",
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.up('md')]: {
            flexDirection: 'column',
            height: 300,
        },
        [theme.breakpoints.down('sm')]: {
            borderRadius: 10,
        }
    },
    minMaxItem: {
        display: 'flex',
        alignItems: 'baseline',

        '& h4, h5': { fontWeight: 'bold', },
        '& h5': { color: theme.palette.text.secondary }
    },
}))

type Props = {
    day: any,
    iterator: number
}

const NextDay: React.FC<Props> = ({day, iterator}) => {

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
        <React.Fragment>
            {iterator > 0 && <Divider orientation="vertical" flexItem />}
            <Grid item md xs={12} className={classes.gridItem} >
                <div className={classes.dayItem}>
                    <div>
                        <Typography variant="h5">{getDayAbbr(day.Date)}</Typography>
                        <Typography variant="caption">{getDate(day.Date)}</Typography>
                    </div>
                    <div>
                        <img src={img} alt="" style={{ marginRight: '20px', display: 'block' }} />
                    </div>
                    <div className={classes.minMaxItem}>
                        <Typography variant="h4">{day.Temperature.Maximum.Value}°</Typography>
                        <Typography variant="h5">/{day.Temperature.Maximum.Value}°</Typography>
                    </div>
                </div>
            </Grid>
        </React.Fragment>
    )
}

export default NextDay
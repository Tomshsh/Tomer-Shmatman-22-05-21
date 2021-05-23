import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles=makeStyles(theme => ({
    nextDays:{

    }
}))

const NextDays = () => {

    const classes = useStyles()

    return(
        <div className={classes.nextDays}></div>
    )
}

export default NextDays
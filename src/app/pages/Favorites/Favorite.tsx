import { IconButton, makeStyles, Typography } from '@material-ui/core'
import { DeleteOutlineRounded } from '@material-ui/icons'
import icon from '../../../icons/MostlyCloudy.svg'
import React, { useState } from 'react'

const useStyles = makeStyles(theme => ({
    favoriteItem: {
        borderRadius: 10,
        height: 300,
        maxWidth: 600,
        boxShadow: "0 20px 43px hsla(0,0%,39.2%,0.05)",
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        margin: 30,
        padding: theme.spacing(4),
        [theme.breakpoints.down("sm")]: {
            margin: '30px auto',
        }
    },
    description: {
        flex: '0 0 50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    icons: {
        flex: '0 0 50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',

        '& img': { height: '50%' },
        '& button': { width: 'fit-content' }
    }
}))

type Props={
    favorite: any,
    iterator: number,
    handleDelete: (i:number) => void
}

const Favorite: React.FC<Props> = ({favorite, iterator, handleDelete}) => {

    const classes = useStyles()

    return (
        <div className={classes.favoriteItem}>
            <div className={classes.description}>
                <div>
                    <Typography variant="h4">{favorite.city}</Typography>
                    <Typography variant="caption">{favorite.lastUpdated}</Typography>
                </div>
                <div>
                    <Typography variant="h3">{favorite.temp}°</Typography>
                    <Typography variant="caption">{favorite.description}</Typography>
                </div>
            </div>
            <div className={classes.icons}>
                <IconButton onClick={() => {handleDelete(iterator)}} aria-label="delete">
                    <DeleteOutlineRounded />
                </IconButton>
                <img src={icon} alt="" />
            </div>
        </div>
    )
}

export default Favorite
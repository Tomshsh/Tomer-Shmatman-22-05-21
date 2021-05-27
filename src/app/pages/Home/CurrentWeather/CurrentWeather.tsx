import { Divider, makeStyles, Typography } from '@material-ui/core'
import interCloudsDay from '../../../../icons/IntermittentClouds(day).4a7ba1cb.svg'
import React, { useState } from 'react'
import SearchField from '../../../components/searchField/searchField'
import client from '../../../../api/api'

const useStyles = makeStyles(theme => ({
    current: {
        display: 'flex',
        flexDirection: 'column',

        '& h4, h2': {
            fontWeight: 'bold'
        }
    },
    tempDescription: {
        display: 'flex',
        alignItems: 'center'
    }
}))

const CurrentWeather = () => {

    const [searchWord, setSearchWord] = useState("")

    const search = async () => {
        try{
            const cities = await client.getCities(searchWord)
            return cities.data.map(c => ({
                title: c.LocalizedName,
                value: c.Key
            }))
        }
        catch(error){
            throw new Error("Couldn't fetch results")
        }

    }

    const classes = useStyles()

    return (
        <div className={classes.current}>
            <Typography variant="caption">current weather</Typography>
            <SearchField
                onChange={(text) => { setSearchWord(text) }}
                searchFunction={search}
            />
            <Typography variant="subtitle2" style={{ marginTop: 20 }}>20:13 / SUNDAY,MAY 23</Typography>
            <Divider style={{ margin: '20px 0' }} />
            <div className={classes.tempDescription}>
                <Typography variant="h1">36°</Typography>
                <Divider orientation="vertical" flexItem variant="middle" style={{ margin: '16px' }} ></Divider>
                <img src={interCloudsDay} alt="" style={{ marginRight: '20px' }} />
                <Typography variant="subtitle1">Intermittent Clouds</Typography>
            </div>
        </div>
    )
}

export default CurrentWeather
import { Container, createMuiTheme, InputAdornment, makeStyles, TextField, ThemeProvider, Typography } from '@material-ui/core';
import React from 'react';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import NextDays from './NextDays/NextDays';
import {Search} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  weatherHead: {
    position: 'relative',
    padding: '40px 0'
  },
  background: {
    position: 'absolute',
    // background: 'transparent linear-gradient(198deg, #00cdec, #00449b) 0 0 no-repeat padding-box',
    top: 0, bottom: 0, right: 0, left: 0
  },
  weatherHeadContainer: {
    position: 'relative'
  },
  forecastContainer: {
    marginTop: 50
  }
}))

const Home: React.FC = () => {

  const classes = useStyles()

  return (
    <div className={classes.weatherHead}>
      {/* <div className={classes.background}></div> */}
      <Container className={classes.weatherHeadContainer} maxWidth="lg">
        <CurrentWeather />
      </Container>
      <Container className={classes.forecastContainer}>
        <Typography variant="h5" style={{ paddingBottom: 30, fontWeight: 'bold' }}>Next 5 Days</Typography>
        <NextDays />
      </Container>
    </div >
  )
}


export default Home;

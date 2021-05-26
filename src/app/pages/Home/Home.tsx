import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import NextDays from './NextDays/NextDays';

const useStyles = makeStyles(theme => ({
  weatherHead: {
    position: 'relative',
    padding: '40px 0'
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

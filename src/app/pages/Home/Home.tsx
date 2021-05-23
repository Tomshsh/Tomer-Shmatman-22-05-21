import { Container, createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import React from 'react';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import NextDays from './NextDays/NextDays';

const useStyles = makeStyles(theme => ({
  weatherHead: {
    position: 'relative',
    padding: '40px 0'
  },
  background: {
    position: 'absolute',
    background: 'transparent linear-gradient(198deg, #00cdec, #00449b) 0 0 no-repeat padding-box',
    top: 0, bottom: 0, right: 0, left: 0
  },
  weatherHeadContainer: {

    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
    },
    position: 'relative'
  }
}))

const theme = createMuiTheme({
  typography: {
    allVariants: { color: "#ffffff" },
    caption: { fontSize: 17, color: '#addced' },
    subtitle1: { color: '#addced' },
    h1: { fontSize: 80 }
  },
  palette: { divider: '#addced' }
})

const Home: React.FC = () => {

  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.weatherHead}>
        <div className={classes.background}></div>
        <Container className={classes.weatherHeadContainer} maxWidth="lg">
          <CurrentWeather />
          <div style={{ flex: '1 1 auto' }}></div>
          <NextDays />
        </Container>
      </div >
    </ThemeProvider>
  )
}


export default Home;

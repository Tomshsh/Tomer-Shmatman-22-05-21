import { Container, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  weatherHead: {
    position:'relative',
    padding: '40 0'
  },
  background: {
    position: 'absolute',
    background: 'transparent linear-gradient(198deg, #00cdec, #00449b) 0 0 no-repeat padding-box',
    top: 0, bottom: 0, right: 0, left: 0
  },
  weatherHeadContainer: {
    display:'flex',
    alignItems: 'center',
    position:'relative'
  }, 
  current: {
    
  }
}))

const Home: React.FC = () => {

  const classes = useStyles()

  return (
    <div className={classes.weatherHead}>
      <div className={classes.background}></div>
      <Container className={classes.weatherHeadContainer} maxWidth="lg">
        Home Component
      </Container>
    </div >
  )
}


export default Home;

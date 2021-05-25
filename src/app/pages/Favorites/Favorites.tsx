import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  favorites:{},
  favoritesContainer:{},

}))

const favorites = [
  {
    city:'London',
    temp: '36',
    icon: '../../../icons/MostlyCloudy.svg',
    description: 'mostly cloudy',
    lastUpdated: '17:00'
  },
  {
    city:'New York',
    temp: '30',
    icon: '../../../icons/Partlycloudy(night).svg',
    description: 'partly cloudy',
    lastUpdated: '17:00'
  },{
    city:'Bangkok',
    temp: '27',
    icon: '../../../icons/Showers(day).svg',
    description: 'showers',
    lastUpdated: '17:00'
  },{
    city:'Shanghai',
    temp: '36',
    icon: '../../../icons/Sunny.svg',
    description: 'sunny',
    lastUpdated: '17:00'
  }
]

const Favorites: React.FC = () => {

  const classes = useStyles()

  return (
    <div className={classes.favorites}>
      <Container className={classes.favoritesContainer}>
        <Grid container >
          {favorites.map((f,i) => (
            <Grid item xs></Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
};

export default Favorites;

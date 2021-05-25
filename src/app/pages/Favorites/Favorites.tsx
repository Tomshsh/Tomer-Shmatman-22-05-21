import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  favorites: {
    padding: '40px 0'
  },
  favoritesContainer: {},
  favoriteItem: {
    borderRadius: 10,
    height: 300,
    boxShadow: "0 20px 43px hsla(0,0%,39.2%,0.05)",
    backgroundColor: theme.palette.primary.main,
    textAlign: 'center',
    margin: 30 
  }

}))

const favorites = [
  {
    city: 'London',
    temp: '36',
    icon: '../../../icons/MostlyCloudy.svg',
    description: 'mostly cloudy',
    lastUpdated: '17:00'
  },
  {
    city: 'New York',
    temp: '30',
    icon: '../../../icons/Partlycloudy(night).svg',
    description: 'partly cloudy',
    lastUpdated: '17:00'
  }, {
    city: 'Bangkok',
    temp: '27',
    icon: '../../../icons/Showers(day).svg',
    description: 'showers',
    lastUpdated: '17:00'
  }, {
    city: 'Shanghai',
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
        <Grid container justify="center">
          {favorites.map((f, i) => (
            <Grid item xs={12} md={6}  >
              <div className={classes.favoriteItem}></div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
};

export default Favorites;

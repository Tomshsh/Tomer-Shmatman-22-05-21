import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import icon from '../../../icons/MostlyCloudy.svg'

const useStyles = makeStyles(theme => ({
  favorites: {
    padding: '40px 0'
  },
  favoritesContainer: {},
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
    alignItems:'right',

    '& img':{height:'50%'}
  }

}))

const favorites = [
  {
    city: 'London',
    temp: '36',
    icon: '/src/icons/MostlyCloudy.svg',
    description: 'mostly cloudy',
    lastUpdated: '17:00'
  },
  {
    city: 'New York',
    temp: '30',
    icon: 'src/icons/Partlycloudy(night).svg',
    description: 'partly cloudy',
    lastUpdated: '17:00'
  }, {
    city: 'Bangkok',
    temp: '27',
    icon: 'src/icons/Showers(day).svg',
    description: 'showers',
    lastUpdated: '17:00'
  }, {
    city: 'Shanghai',
    temp: '36',
    icon: 'src/icons/Sunny.svg',
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
            <Grid item xs={12} md={6} >
              <div className={classes.favoriteItem}>
                <div className={classes.description}>
                  <div>
                    <Typography variant="h4">{f.city}</Typography>
                    <Typography variant="caption">{f.lastUpdated}</Typography>
                  </div>
                  <div>
                    <Typography variant="h3">{f.temp}°</Typography>
                    <Typography variant="caption">{f.description}</Typography>
                  </div>
                </div>
                <div className={classes.icons}>
                  <img src={icon} alt="" />
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
};

export default Favorites;

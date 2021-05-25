import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  favorites:{},
  favoritesContainer:{},

}))

const Favorites: React.FC = () => {

  const classes = useStyles()

  return (
    <div className={classes.favorites}>
      <Container className={classes.favoritesContainer}>
        <Grid container >

        </Grid>
      </Container>
    </div>
  )
};

export default Favorites;

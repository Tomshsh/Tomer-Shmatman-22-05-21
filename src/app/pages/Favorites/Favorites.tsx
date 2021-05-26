import { Button, Container, Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import ConfirmDialog from '../../components/ConfirmDialog/ConfirmDialog';
import Favorite from './Favorite'
import {Delete} from '@material-ui/icons'


const useStyles = makeStyles(theme => ({
  favorites: {
    padding: '40px 0'
  },
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

  const [favToDelete, setFavToDelete] = useState<number | null>(null)
  const [showDialog, setDialog] = useState(false)

  useEffect(() => {
    if (favToDelete !== null) {
      setDialog(true)
    }
  }, [favToDelete])

  useEffect(() => {
    if (!showDialog) {
      // delaying this state change to prevent the dialog's title from changing briefly before it closes. 
      setTimeout(() => { setFavToDelete(null) }, 500)

    }
  }, [showDialog])

  const handleDelete = (i: number) => { setFavToDelete(i) }

  const closeDialog = () => { setDialog(false) }

  const deleteFavorite = (i: number) => {
    closeDialog()
  }

  return (
    <div className={classes.favorites}>
      <Container>
        <ConfirmDialog
          open={showDialog}
          title={`Delete ${favorites[favToDelete || 0].city} from favorites?`}
          onClose={closeDialog}
          actions={<>
            <Button variant="contained" onClick={closeDialog}>Cancel</Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<Delete/>}
              onClick={() => {favToDelete && deleteFavorite(favToDelete)}}
            >
              Delete
      </Button>
          </>}
        />
        <Grid container justify="center">
          {favorites.map((f, i) => (
            <Grid item xs={12} md={6} key={i} >
              <Favorite favorite={f} iterator={i} handleDelete={handleDelete} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
};

export default Favorites;

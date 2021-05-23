import { AppBar, Button, ButtonGroup, Container, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    toolbar: {
        display: 'inline-grid',
    },
    buttons: {
        justifySelf: 'right',

        '& a.active': {
            backgroundColor: theme.palette.info.dark,
            color: theme.palette.primary.main
        }
    }
}))

export const Header: React.FC = () => {

    const classes = useStyles()

    return (
        <AppBar color="primary" position="static">
            <Toolbar >
                <Container className={classes.toolbar} maxWidth="lg">
                    <ButtonGroup className={classes.buttons} disableRipple disableElevation variant="contained" color="primary" aria-label="contained primary button group">
                        <Button component={NavLink} to="/home">Home</Button>
                        <Button component={NavLink} to="/favorites">Favorites</Button>
                    </ButtonGroup>
                </Container>
            </Toolbar>
        </AppBar>
    )
}
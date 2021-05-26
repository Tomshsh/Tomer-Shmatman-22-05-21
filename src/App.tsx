import { createMuiTheme, CssBaseline, makeStyles, responsiveFontSizes, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { Header } from './app/components/header/Header';
import Favorites from './app/pages/Favorites/Favorites';
import Home from './app/pages/Home/Home';
import NotFound from './app/pages/NotFound/NotFound';

let theme = createMuiTheme({
  palette: {
    primary: { main: '#ffffff' },
    background: { default: '#f8f9fc' },
    text:{secondary:'rgb(0,0,0,0.4)'}
    //divider: '#addced'
  },
  typography: {
    // allVariants: { color: "#ffffff" },
    'subtitle1': { fontSize: 17, color: 'rgb(0,0,0,0.8)' },
    'subtitle2': { color: 'rgb(0,0,0,0.8)' },
    caption: { fontSize: 15, color: 'rgb(0,0,0,0.5)', fontWeight: 600, textTransform: 'uppercase' },
    h1: { fontSize: 80, fontWeight:'bold' },
    h3: {fontWeight:'bold'},
    h4: {fontWeight:'bold'},
    h5: {fontWeight:'bold'}

  },
})

theme = responsiveFontSizes(theme)

const useStyles = makeStyles(theme => ({
  app: {
    height: '100%'
  }
}))

function App() {

  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Router>
          <div className={classes.app}>
            <Header></Header>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/favorites" component={Favorites} />
              <Route path="/404" component={NotFound} />
              <Redirect exact from='/' to='/home' />
              <Redirect to="/404" />
            </Switch>
          </div>
        </Router>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;

import React, { Component } from 'react';
import { AppBar } from 'material-ui';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { getMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import SeekingPage from './containers/SeekingPage';
import SellingPage from './containers/SellingPage';
import './App.css';

const muiTheme = getMuiTheme();

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <AppBar
              title="OGMM"
              showMenuIconButton={false}
            />
            <BrowserRouter basename="/">
              <div>
                <Link to="/selling">selling</Link>
                <Link to="/seeking">seeking</Link>
                <Switch>
                  <Route exact path="/" component={SellingPage}/>
                  <Route path="/selling" component={SellingPage}/>
                  <Route path="/seeking" component={SeekingPage}/>
                </Switch>
              </div>
            </BrowserRouter>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

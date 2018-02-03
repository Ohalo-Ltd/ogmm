import React, { Component } from 'react';
import { AppBar } from 'material-ui';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import SeekingPage from './containers/SeekingPage';
import SellingPage from './containers/SellingPage';
import PostPage from './containers/PostPage';
import './App.css';
import MenuBar from "./components/MenuBar";

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
                <MenuBar/>
                <Switch>
                  <Route exact path="/" component={SellingPage}/>
                  <Route path="/selling" component={SellingPage}/>
                  <Route path="/seeking" component={SeekingPage}/>
                  <Route path="/post" component={PostPage}/>
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

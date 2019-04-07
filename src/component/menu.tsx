import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Dashboard from '@material-ui/icons/Dashboard';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

interface Props {

}

interface State {
}

export default class Menu extends Component<Props, State> {
  
  constructor(props: Props){
    super(props);
  }

  render() {
      return (
        <>
        <AppBar className={"menu"}>
          <Toolbar>
            <IconButton color="inherit" className={"menu-icon"}>
              <Dashboard/>
            </IconButton>
            <Typography variant="h6" color="inherit" className={"menu-label"}>
              Projects Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={"left-panel"}></div>
        </>
      );
  }
};

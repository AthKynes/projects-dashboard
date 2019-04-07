import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Dashboard from '@material-ui/icons/Dashboard';

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
          <div className={"menu"}>
          <Typography className={"menu-title"}>
          <Dashboard></Dashboard>
            Projects Dashboard
          </Typography>
          </div>
          <div className={"left-panel"} >
          </div>
        </>
      );
  }
};

import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class Progress extends Component {
  render() {
    return (
        <div className={"loading"}>
            <CircularProgress className={"loading-progress"}/>
        </div>
    );
  }
}
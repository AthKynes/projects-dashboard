import React, { Component } from 'react';
import Progress from './progress';
import Menu from './menu';

interface Props {

}

interface State {
  loading: boolean,
}

class App extends Component<Props, State> {
  
  constructor(props: Props){
    super(props);
    this.state = {
      loading: true,
    }
  }

  componentDidMount(){
    this.setState({loading:false})
  }

  render() {
    if(this.state.loading){
      return (
        <Progress/>
      );
    }else{
      return (
        <div>
          <Menu/>
        </div>
      );
    }

    
  }
}

export default App;

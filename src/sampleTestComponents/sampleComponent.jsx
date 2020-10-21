import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import SampleComponent2 from './sampleComponent2';

class SampleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'hi',
    };
  }

  sampleComponentRedirect = () => {
    console.log("in redirect");
    this.props.history.replace('/sampleComponent2');
  };

  componentDidUpdate(){
    console.log("in sample component component did update");
  }

  render() {
    console.log('render in sample component');
    return (
      <div>
        <Route
          path={'/sampleComponent2'}
          render={() => <SampleComponent2></SampleComponent2>}
        ></Route>
        <button onClick={()=>this.sampleComponentRedirect()}>sample component button</button>
         is hi
      </div>
    );
  }
}

export default withRouter(SampleComponent);
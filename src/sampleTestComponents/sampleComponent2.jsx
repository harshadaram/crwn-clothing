import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

export default class SampleComponent2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'hi',
    };
  }

  componentDidMount(){
    console.log("in sample component2 component did mount");
  }

  render() {
    console.log('render in sample component2');
    return (
      <div>
        is hello
      </div>
    );
  }
}

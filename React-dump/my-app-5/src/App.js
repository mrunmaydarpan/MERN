import React, { Component } from 'react'
import Child from './Components/Child'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {
  render() {
    return (
      <>
        <Child data='savitha' />
      </>
    );
  }
}
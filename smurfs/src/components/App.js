import React, { Component } from 'react'
import './App.css'
import { Smurfs } from './Smurfs'

import { connect } from 'react-redux'
import { getSmurfs } from '../actions'

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    if (this.props.fetchingSmurfs) {
      return <h2>Loading</h2>
    }
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Smurfs smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  }
}

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App)

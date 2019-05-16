import React from 'react';
import Main from './components/pages/Main'
import { connect } from 'react-redux'
import './App.css';

const App = ({error}) => {
  if(error.length !== 0){
    alert(error)
  }
  return (
    <Main/>
  );
}

export default connect(
  state => ({
    error: state.error
  })
)(App);

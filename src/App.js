import React from 'react';
import Main from './containers/Main'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import './App.css';

const App = ({error, message}) => {
  if(error.length !== 0){
    alert(error)
    window.location = '/'
  } else if(message.length !== 0){
    alert(message)
  }
  return (
    <Switch>
      <Route exact path="/:modal/:id" component={Main}/>
      <Route exact path="/" component={Main}/>
    </Switch>
  );
}

export default connect(
  state => ({
    error: state.error,
    message: state.message
  })
)(App);

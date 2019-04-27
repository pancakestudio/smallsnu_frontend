import React from 'react';
import logo from '../logo.svg';
import Main from '../components/pages/Main'
import './App.css';

class App extends React.Component {
  componentDidMount(){
    document.title = "SMALL SNU"
  }

  render() {
    return (
      <Main/>
    );
  }
  
}
export default App;

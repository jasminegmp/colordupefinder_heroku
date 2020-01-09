import React from 'react';
import './styles.scss';
import About from '../About';
import Contact from '../Contact';
import Landing from '../Landing';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {
        loading: true
    };
  }

  componentDidMount() {
    setTimeout(() =>{ //Start the timer
      this.setState({loading: false}) //After 2 seconds, set render to true
    }, 2000);
  }

  render() {
    // bring this back later! %%%%%%%%%%%%%%%
     // if (this.state.loading) return <Loader/>;

     /*
     BEFORE
     

        */
      return (
        <Landing/>
      )
  }
}


export default App;

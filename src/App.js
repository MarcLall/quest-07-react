import logo from './logo.svg';
import './App.css';
import QuoteCard from "./components/QuoteCard"
import axios from "axios";
import React from 'react';


class App extends React.Component {
  //constructor(props) {
    //super(props);
    state = {
      simpsons: [],
    }  
  
  getQuote = () => {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(resp => resp.data)
      .then(data => {
        console.log(data)
        this.setState({
          simpsons: data[0],
        })
      });
    }
  render() {
    return ( <div className = "App">
      <QuoteCard simpson = {this.state.simpsons} /> 
      <button type='button' onClick={this.getQuote}>click</button>
      </div>
    );
  }
}

export default App;
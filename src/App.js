import React, { Component } from "react";
import "./App.css";
import axios from "axios";

export default class App extends Component {
  state = {
    RandomAdvice: "",
  };
  componentDidMount = () => {
    axios.get("https://api.adviceslip.com/advice").then((res) =>
      this.setState({
        RandomAdvice: res.data.slip.advice,
      })
    );
  };

  getAdvice = () => {
    axios.get("https://api.adviceslip.com/advice").then((res) =>
      this.setState({
        RandomAdvice: res.data.slip.advice,
      })
    );
  };
  render() {
    const { RandomAdvice } = this.state;

    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{RandomAdvice}</h1>
          <button onClick={this.getAdvice} className="button-advice">
            <span>GIVE ME ADVICE</span>
          </button>
        </div>
      </div>
    );
  }
}

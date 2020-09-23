import React, { Component } from "react";
import { Switch, Link, NavLink, Route } from "react-router-dom";
import DogList from "./Doglist";

import "./App.css";

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: "/images/whiskey.jpg",
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!",
        ],
      },
      {
        name: "Hazel",
        age: 3,
        src: "/images/hazel.jpg",
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs.",
        ],
      },
      {
        name: "Tubby",
        age: 4,
        src: "/images/tubby.jpg",
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food.",
        ],
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/dogs/"
            render={() => <DogList dogs={this.props.dogs} />}
          />
          <Route
            exact
            path="/dogs/tubby"
            render={() => <h1> Dogs tubby!</h1>}
          />
          <Route
            exact
            path="/dogs/hazel"
            render={() => <h1> Dogs hazel!</h1>}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

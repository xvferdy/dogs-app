import React, { Component } from "react";
import { Switch, Link, NavLink, Route } from "react-router-dom";
import DogList from "./Doglist";
import DogDetails from "./DogDetails";

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
    const getDog = (routeProps) => {
      let name = routeProps.match.params.name;
      let currentDog = this.props.dogs.find(
        (dog) => dog.name.toLowerCase() === name.toLowerCase()
      );
      return <DogDetails {...routeProps} dog={currentDog} />;
    };
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/dogs/"
            render={() => <DogList dogs={this.props.dogs} />}
          />
          <Route exact path="/dogs/:name" render={getDog} />
        </Switch>
      </div>
    );
  }
}

export default App;

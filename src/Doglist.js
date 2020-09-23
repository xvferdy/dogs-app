import React, { Component } from "react";
import "./Doglist.css";

class DogList extends Component {
  render() {
    return (
      <div className="DogList">
        <h1 className="display-1">Dog List!</h1>
        <div className="container">
          <div className="row">
            {this.props.dogs.map((dog) => (
              <div className="Dog col-lg-4" key={dog.name}>
                <h3>{dog.name}</h3>
                <img src={dog.src} alt={dog.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default DogList;

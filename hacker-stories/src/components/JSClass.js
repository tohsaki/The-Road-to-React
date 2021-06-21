import React from "react";

class Developer {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getName() {
    return this.firstName + " " + this.lastName;
  }
}

function tryDeveloper() {
  // class definition
  const robin = new Developer("Robin", "Wieruch");
  console.log(robin.getName());
  // "Robin Wieruch"
  // another class instantiation
  const dennis = new Developer("Dennis", "Wieruch");
  console.log(dennis.getName());
}

function JSClass() {
  return <div>{tryDeveloper()}</div>;
}

export default JSClass;

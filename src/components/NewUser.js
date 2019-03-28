import React, { Component } from "react";

import Label from "../Label";

class NewUser extends Component {
  render() {
    return (
      <div className="center">
        <form className="pure-form pure-form-stacked">
          <Label htmlFor="name" text="Quem é você?" />
        </form>
      </div>
    );
  }
}

export default NewUser;

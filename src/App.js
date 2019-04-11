import React, { Component } from "react";
// import logo from './logo.svg';

import "./App.css";
import Header from "./components/Header";
import NewUser from "./components/NewUser";
import Toast from "./components/Toast";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NewUser
          onSubmit={user => {
            let gender = user.gender === "m" ? "o" : "a";
            this.refs.toast.success(`Seja bem vind${gender} ${user.name}!`);
          }}
          error={msg => this.refs.toast.error(msg)}
        />
        <Toast ref="toast" />
      </div>
    );
  }
}

export default App;

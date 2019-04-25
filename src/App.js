import React, { Component } from "react";

import "./App.css";

import Header from "./components/Header";
import NewUser from "./components/NewUser";
import Toast from "./components/Toast";

import User from "./models/User";

class App extends Component {
  constructor(props) {
    super(props);
    User.load(
      user => {
        this.state = { user: user };
      },
      () => {
        this.state = { user: undefined };
      }
    );
  }

  messageToNewUser(user) {
    let gender = user.gender === "m" ? "o" : "a";
    this.refs.toast.success(`Seja bem vind${gender} ${user.name}!`);
  }

  renderNewUser() {
    let user = this.state.user;
    if (user) {
      let style = {
        marginTop: "140px",
        textAlign: "center"
      };

      return (
        <div style={style}>
          <b>
            Usuário obtido do <i>localStorage</i>
          </b>
          <br />
          {user.toString()}
        </div>
      );
    } else {
      return (
        <NewUser
          onSubmit={user => {
            user.save(() => {
              this.setState(
                {
                  user: user
                },
                () => {
                  this.messageToNewUser(user);
                }
              );
            });
          }}
          error={msg => this.refs.toast.error(msg)}
        />
      );
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderNewUser()}
        <Toast ref="toast" />
      </div>
    );
  }
}

export default App;

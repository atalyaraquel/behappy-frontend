import React, { Component } from "react";

import Label from "../Label";
import Input from "../Input";
import GenderSelector from "../GenderSelector";
import Button from "../Button";
import User from "../../models/User";

class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: new User(),
      validation: {
        invalidName: false,
        invalidGender: false
      },
      completedFirstView: false
    };
  }

  updateUserName = event => {
    let user = this.state.user;
    user.name = event.target.value;
    this.setState({
      user: user
    });
  };

  updateUserGender = (event, gender) => {
    event.preventDefault();
    let user = this.state.user;
    user.gender = gender;
    this.setState({
      user: user
    });
  };

  valid = e => {
    e.preventDefault();
    let user = this.state.user;
    let validation = this.state.validation;

    validation.invalidName = !user.validName();
    validation.invalidGender = !user.validGender();

    let message = "";
    let completedFirstView = false;

    if (validation.invalidName && validation.invalidGender) {
      message = "Por favor, informe seu nome e gênero!!!";
    } else if (validation.invalidName) {
      message = "Por favor, informe seu nome!!!";
    } else if (validation.invalidGender) {
      message = "Por favor, selecione seu gênero!!!";
    } else {
      completedFirstView = true;
    }

    if (!completedFirstView) {
      this.props.error(message);
    }

    this.setState({
      validation: validation,
      completedFirstView: completedFirstView
    });
  };

  renderName() {
    return (
      <section>
        <Label
          htmlFor="name"
          text="Quem é você?"
          invalidValue={this.state.validation.invalidName}
        />
        <Input
          id="name"
          placeholder="Digite seu nome"
          maxLength="40"
          readOnly={this.state.completedFirstView}
          invalidValue={this.state.validation.invalidName}
          defaultValue={this.state.user.name}
          onChange={this.updateUserName}
        />
      </section>
    );
  }

  renderGender() {
    if (this.state.completedFirstView) {
      return null;
    } else {
      return (
        <section>
          <Label
            text="Seu gênero:"
            invalidValue={this.state.validation.invalidGender}
          />
          <GenderSelector
            invalidValue={this.state.validation.invalidGender}
            gender={this.state.user.gender}
            updateGender={this.updateUserGender}
          />
        </section>
      );
    }
  }

  renderButtons() {
    if (this.state.completedFirstView) {
      return (
        <section>
          <Button
            text="Voltar"
            onClick={event => {
              event.preventDefault();
              this.setState({
                completedFirstView: false
              });
            }}
          />
          <Button text="Salvar" main />
        </section>
      );
    } else {
      return (
        <section>
          <Button main text="Próximo" onClick={this.valid} />
        </section>
      );
    }
  }

  render() {
    return (
      <div className="center">
        <form className="pure-form pure-form-stacked">
          {this.renderName()}
          {this.renderGender()}
          {this.renderButtons()}
        </form>
      </div>
    );
  }
}

export default NewUser;

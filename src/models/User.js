import Avatar from "./Avatar";

import Repository from "../infrastructure/Repository";

const repository = new Repository();

class User {
  constructor() {
    this.name = "";
    this.gender = "";
    this.avatar = Avatar.getAll()[0];
  }

  validName = () => {
    return (
      typeof this.name === "string" &&
      this.name.length !== 0 &&
      this.name.length <= 40
    );
  };

  validGender = () => {
    return ["m", "f"].some(param => {
      return this.gender === param;
    });
  };

  save = callback => {
    repository.save(this, callback);
  };

  static load = (success, fail) => {
    repository.load(json => {
      let user = new User();
      user.name = json.name;
      user.gender = json.gender;
      user.avatar = new Avatar(json.avatar.index, json.avatar.description);
      success(user);
    }, fail);
  };

  toString() {
    return `${this.name}, ${this.avatar.toString()}`;
  }
}

export default User;

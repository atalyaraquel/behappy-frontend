import Avatar from "./Avatar";

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
}

export default User;

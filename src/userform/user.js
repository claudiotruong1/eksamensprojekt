// vi konstruere vores user class, og herefter definerer vi, hvilke oplysninger vi ønsker at bruge
class User {
    constructor(id, email, password) {
      this.id = id;
      this.email = email;
      this.password = password;
    }
  }
  
  module.exports = User;
  
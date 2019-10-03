import Model from './model'

export default class UserModel extends Model {
  constructor(dbUser) {
    super(dbUser)
    this.firstName = dbUser.firstName
    this.lastName = dbUser.lastName
    this.email = dbUser.email
    this.password = dbUser.password
    // Add items to updates as new items are changed before saving
  }

  setFirstName(name) {
    this.updateStack.push('firstNane', name)
    this.firstName = name
  }

  setLastName(name) {
    this.updateStack.push("lastName", name)
    this.lastName = name
  }

  setEmail(_email) {
    this.updateStack.push("email", _email)
    this.email = _email
  }

  setPassword(_password) {
    // TODO: Encrypt password
    this.updateStack.push("password", _password)
    this.password = _password
  }

  toJSON() {
    return {
      firstName: this.firstName,
      lastname: this.lastName,
      email: this.email
    }
  }
}
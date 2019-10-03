import { MODEL_DNE } from 'variables/errors/model'

function UpdateStack() {
  this.updates = {}
  this.push = (key, value) => {
    this.updates[key] = value
  }
  this.clear = () => {
    this.updates = {}
  }
}

export default class Model {
  constructor(dbModel) {
    if (!dbModel) {
      throw MODEL_DNE
    }
    this._dbModel = dbModel
    // DataValues of props that needs to be updated
    this.updateStack = new UpdateStack()
  }

  // static methods
  async save() {
    try {
      await this._dbModel.update(this.updateStack.updates)
      this.updateStack.clear()
    } catch (error) {
      throw error
    }
  }

  async destroy() {
    try {
      await this._dbModel.destroy()
      delete this
    } catch (error) {
      throw error
    }
  }
}

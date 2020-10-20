import { makeAutoObservable } from "mobx"

class OwnerStore {
  owner = 'Jovana'

  constructor() {
    makeAutoObservable(this)
  }

  setOwner = newOwner => {
    this.owner = newOwner
  }
}

export default OwnerStore
import { makeAutoObservable } from 'mobx'

class OwnerStore {
  owner = { 
    name: 'Jovana', 
    town: 'Ljubljana'
  }

  constructor() {
    makeAutoObservable(this)
  }

  setOwner = newOwner => {
    this.owner = newOwner
  }
}

export default OwnerStore
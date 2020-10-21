import { makeAutoObservable } from 'mobx'

class CatsStore {
  cats = ['mi', 'ci']

  constructor() {
    makeAutoObservable(this)
  }

  addCat = cat => {
    this.cats.push(cat)
  };

  get catsCount() {
    return this.cats.length
  }
}

export default CatsStore 
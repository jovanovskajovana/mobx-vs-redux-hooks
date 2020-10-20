import { makeAutoObservable } from "mobx"

class CatStore {
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

export default CatStore 
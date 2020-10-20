import { createContext, useContext } from 'react'

import CatStore from './catStore'
import OwnerStore from './ownerStore'

const storesContext = createContext({
  catStore: new CatStore(),
  ownerStore: new OwnerStore(),
})

// Create a custom hook
export const useStores = () => useContext(storesContext)

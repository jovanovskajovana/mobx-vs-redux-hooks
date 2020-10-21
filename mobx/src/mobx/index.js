import { createContext, useContext } from 'react'

import CatsStore from './stores/cats'
import OwnerStore from './stores/owner'

const storesContext = createContext({
  catsStore: new CatsStore(),
  ownerStore: new OwnerStore(),
})

// Create a custom hook
export const useStores = () => useContext(storesContext)

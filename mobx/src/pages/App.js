import React from 'react'
import { observer } from 'mobx-react-lite'

import Page from '../components/Page'
import { useStores } from '../mobx'

const App = () => {
  const { ownerStore, catsStore } = useStores()

  return (
    <Page>
      <h1>{ownerStore.owner.name} from {ownerStore.owner.town} has {catsStore.catsCount} cats.</h1>
      <ul>
        {catsStore.cats.map((cat, index) => (
          <li key={index}>{cat}</li>
        ))}
      </ul>
      <button onClick={() => catsStore.addCat('ri')}>Add Cat</button>
    </Page>
  );
}

export default observer(App);

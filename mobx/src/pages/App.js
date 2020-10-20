import React from 'react';
import { observer } from 'mobx-react'

import Page from '../components/Page'
import { useStores } from '../stores'

const App = () => {
  const { ownerStore, catStore } = useStores()

  return (
    <Page>
      <h1>{ownerStore.owner} has {catStore.catsCount} cats.</h1>
      <ul>
        {catStore.cats.map((cat, index) => (
          <li key={index}>{cat}</li>
        ))}
      </ul>
      <button onClick={() => catStore.addCat('ri')}>Add Cat</button>
    </Page>
  );
}

export default observer(App);

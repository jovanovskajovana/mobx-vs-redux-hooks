import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Page from '../components/Page'
import { addCat } from '../redux/reducers/cats'

const App = () => {
  const dispatch = useDispatch()
  const cats = useSelector((state) => state.cats)
  const owner = useSelector((state) => state.owner)

  return (
    <Page>
      <h1>{owner.name} from {owner.town} has {cats.length} cats.</h1>
      <ul>
        {cats.map((cat, index) => (
          <li key={index}>{cat}</li>
        ))}
      </ul>
      <button onClick={() => dispatch(addCat('ri'))}>Add Cat</button>
    </Page>
  )
}

export default App

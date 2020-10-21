// Action Types 
export const ADD_CAT = 'ADD_CAT'

// Action Creators
export const addCat = (payload) => ({
  type: ADD_CAT,
  payload,
})

// Initial State
const INITIAL_STATE = [
 'mi', 'ci'
]

// Reducer 
const cats = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CAT:
      return [...state, action.payload]

    default:
      return state;
  }
}

export default cats

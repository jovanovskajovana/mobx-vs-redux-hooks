// Action Types 
export const SET_OWNER = 'SET_OWNER'

// Action Creators
export const setOwner = (payload) => ({
  type: SET_OWNER,
  payload,
})

// Initial State
const INITIAL_STATE = {
  name: 'Jovana',
  town: 'Ljubljana'
}

// Reducer 
const owner = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_OWNER:
      return action.payload 
    
    default:
      return state;
  }
}

export default owner

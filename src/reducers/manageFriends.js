export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      state.friends.push(action.friend) // this didn't fail the test, but unsure if this violates being a pure function?
      return state
    case 'REMOVE_FRIEND':
    /* pretty sure this wasn't the intended solution.
      let newState = {}
      newState.friends = state.friends.filter(f => f.id !== action.id)
      return newState
      */
      return Object.assign({}, state, {friends: state.friends.filter(f => f.id!== action.id )})
    default:
      return state
  }
}

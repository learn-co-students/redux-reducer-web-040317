export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      state.friends.push(action.friend)
      return state
    case 'REMOVE_FRIEND':
      let newState = {}
      newState.friends = state.friends.filter(f => f.id !== action.id)
      return newState
    default:
      return state
  }
}

// pretty sure this wasn't the intended solution. 

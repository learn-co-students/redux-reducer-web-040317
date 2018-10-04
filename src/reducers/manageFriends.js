export function manageFriends(state, action){
    switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends,{hometown: action.friend.hometown,id: action.friend.id, name: action.friend.name } ]}
    case 'REMOVE_FRIEND':
      var index = state.friends.findIndex(function(curr){
        return curr.id === action.id
      })
      let check = [...state.friends]
      check.splice(index,1)
      return {friends: check}
    default:
      return state;
  }
}

export function manageFriends(state = {
  friends: [{
    hometown: "",
    id: "",
    name: ""
  }]
}, action){
  switch(action.type){

    case "ADD_FRIEND":
    return Object.assign({}, state, {
      friends: [...state.friends, action.friend] 
    })

    default:
    return state
  }

}

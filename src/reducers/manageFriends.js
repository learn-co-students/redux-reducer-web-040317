export function manageFriends(state = {
  friends: [{
    hometown: "",
    id: "",
    name: ""
  }]
}, action){
  switch(action.type){

    case "ADD_FRIEND":
    return state

    default:
    return state
  }

}

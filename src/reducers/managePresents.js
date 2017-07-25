export function managePresents(state = {
  presents: 0,
}, action){
  switch(action.type){

    case "increase":
    return Object.assign({}, state, {
      presents: state.presents += 1
    })

    default:
    return state
  }

}

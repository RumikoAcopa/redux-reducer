export function manageFriends(state={freinds: [], }, action){
  switch(action.type){
    case ADD_FRIEND: 
    return(
      {...state, 
        friends: [
          ...state.friends,
          action.friend
        ]
      }
    )
    case "REMOVE_FRIEND":
      const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
      return (
        {...state,
            friends: [
            ...state.friends.slic(0, removalIndex),
            ...state.friends.slic(removalIndex + 1)
          ]
        }
      )
    default: 
      return state;
  }
}

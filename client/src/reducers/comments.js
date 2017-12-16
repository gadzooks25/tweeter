const comments = ( state = [], action ) => {
  switch(action.type) {
    case 'COMMENTS':
      return action.comments
    case 'ADD_COMMENT':
      return [action.comment, ...state];
    case 'UPDATE_COMMENT':
      return state.map ( c => {
        if (c.id === action.comment.id)
          return action.comment
        return c
      })
    case 'DELETE_COMMENT':
      return state.filter( comment => comment.id !== action.id)
    default:
      return state
  }
}

export default comments;
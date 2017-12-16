const posts = ( state = [], action ) => {
  switch (action.type) {
    case 'DELETE_POST':
      return state.filter( p => p.id !== action.id )
    default:
      return state;
  }
}

export default posts;

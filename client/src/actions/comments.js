import axios from 'axios';

export const getComment = () => {
  return(dispatch) => {
    axios.get('/api/comments')
      .then( res => dispatch({ type: 'COMMENTS', comments: res.data }))
  }
}

export const addComment = (comment) => {
  return(dispatch) => {
    axios.post('/api/comments', {comment})
      .then( res => dispatch({ type: 'ADD_COMMENT', comments: res.data }))
  }
}

export const updateComment = (comment) => {
  return(dispatch) => {
    axios.put(`/api/comments/${comment.id}`, {comment})
    .then( res => dispatch({ type: 'ADD_COMMENT', comment: res.data}))
  }
}

export const deleteComment = (id) => {
  return (dispatch) => {
    axios.delete(`/api/comments/${id}`)
      .then(() => dispatch({ type: 'DELETE_COMMENT',id: id}))
  }
}

import axios from 'axios';

export const deletePost = (id) => {
  return {type: 'DELETE_POST', id}
}

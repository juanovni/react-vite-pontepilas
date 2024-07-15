import * as types from "./actionTypes";

export function getComments(callback = () => {}) {
  return (dispatch) => {
    dispatch({ type: types.FILL_COMMENTS, payload: 'data'});

    callback();
  };
}

export function addComment(data, callback = () => {}) {
  return (dispatch) => {
    dispatch({ type: types.ADD_COMMENT, payload: data });

    if (callback) callback();
  };
}

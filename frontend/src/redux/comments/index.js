import * as types from "./actionTypes";

const initialState = {
  value: 0,
  data: [
    {
      id: "1",
      title: "Task 1",
      completed: false,
      description: "This is a task",
    },
  ],
};

export default function comments(state = initialState, action) {
  switch (action.type) {
    case types.FILL_COMMENTS:
      return { ...state.data };
    case types.ADD_COMMENT:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    default:
      return state;
  }
}

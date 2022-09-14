import JobActionTypes from "./job.types";
import { addItemToJobs } from "./job.utils";

const INITIAL_STATE = {
  visitedJobs: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case JobActionTypes.ADD_ITEM:
      return {
        ...state,
        visitedJobs: addItemToJobs(state.visitedJobs, action.payload),
        // visitedJobs: [...state.visitedJobs, action.payload]
      };

    default:
      return state;
  }
  console.log(state.visitedJobs);
};

export default userReducer;

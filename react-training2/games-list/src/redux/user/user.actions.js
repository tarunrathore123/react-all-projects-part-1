import JobActionTypes from "./job.types";

export const addJob = job =>({
    type: JobActionTypes.ADD_ITEM,
    payload: job
});
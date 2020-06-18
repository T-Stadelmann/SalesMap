import { setClickedPinIndex } from "../types";

const setClickedPinIndexAction = index => ({
        type: setClickedPinIndex,
        payload: index
    });

export const setClickedPinIndexFunction = index => dispatch => {
    dispatch(setClickedPinIndexAction(index))
};
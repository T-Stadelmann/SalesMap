import { toggleDragPan } from "../types";

const toggleDragPanAction = () => ({
        type: toggleDragPan
    });

export const toggleDragPanFunction = () => dispatch => {
    dispatch(toggleDragPanAction())
};
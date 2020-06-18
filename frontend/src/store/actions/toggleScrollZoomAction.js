import { toggleScrollZoom } from "../types";

const toggleScrollZoomAction = () => ({
        type: toggleScrollZoom
    });

export const toggleScrollZoomFunction = () => dispatch => {
    dispatch(toggleScrollZoomAction())
};
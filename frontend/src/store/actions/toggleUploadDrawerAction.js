import { toggleUploadDrawer } from "../types";

const toggleUploadDrawerAction = () => ({
        type: toggleUploadDrawer
    });

export const toggleUploadDrawerFunction = () => dispatch => {
    dispatch(toggleUploadDrawerAction())
};
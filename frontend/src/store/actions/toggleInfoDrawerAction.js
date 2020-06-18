import { toggleInfoDrawer } from "../types";

const toggleInfoDrawerAction = () => ({
        type: toggleInfoDrawer
    });

export const toggleInfoDrawerFunction = () => dispatch => {
    dispatch(toggleInfoDrawerAction())
};
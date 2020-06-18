import { toggleFilterDrawer } from "../types";

const toggleFilterDrawerAction = () => ({
        type: toggleFilterDrawer
    });

export const toggleFilterDrawerFunction = () => dispatch => {
    dispatch(toggleFilterDrawerAction())
};
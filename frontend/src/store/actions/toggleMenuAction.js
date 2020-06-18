import { toggleMenu } from "../types";

const toggleMenuAction = () => ({
        type: toggleMenu
    });

export const toggleMenuFunction = () => dispatch => {
    dispatch(toggleMenuAction())
};
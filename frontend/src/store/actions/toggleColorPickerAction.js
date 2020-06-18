import { toggleColorPicker } from "../types";

const toggleColorPickerAction = () => ({
        type: toggleColorPicker
    });

export const toggleColorPickerFunction = () => dispatch => {
    dispatch(toggleColorPickerAction())
};
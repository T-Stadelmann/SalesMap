import { toggleUploadPopUp } from "../types";

const toggleUploadPopUpAction = () => ({
        type: toggleUploadPopUp
    });

export const toggleUploadPopUpFunction = () => dispatch => {
    dispatch(toggleUploadPopUpAction())

};
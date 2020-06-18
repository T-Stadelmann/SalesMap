import { toggleFileUpload } from "../types";

const toggleFileUploadAction = () => ({
        type: toggleFileUpload
    });

export const toggleFileUploadFunction = () => dispatch => {
    dispatch(toggleFileUploadAction())

};